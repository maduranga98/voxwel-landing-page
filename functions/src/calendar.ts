import { calendar as createCalendar, calendar_v3 } from '@googleapis/calendar';
import { OAuth2Client } from 'google-auth-library';
import { randomUUID } from 'crypto';

/** Length of a demo call. Matches the "15 minutes" promised in the booking emails. */
export const DEMO_MINUTES = 15;

/** Bookings further out than this (or in the past) are rejected. */
const MAX_DAYS_AHEAD = 61;
const MIN_LEAD_MINUTES = 60;

export class SlotTakenError extends Error {
  constructor() {
    super('Requested time is already booked');
    this.name = 'SlotTakenError';
  }
}

export class InvalidSlotError extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'InvalidSlotError';
  }
}

export interface GoogleCredentials {
  clientId: string;
  clientSecret: string;
  refreshToken: string;
  /** Defaults to the authorised account's primary calendar. */
  calendarId?: string;
}

export interface DemoBooking {
  name: string;
  email: string;
  company: string;
  companySize: string;
  message: string;
  /** YYYY-MM-DD, in the visitor's time zone. */
  dateISO: string;
  /** HH:MM (24h), in the visitor's time zone. */
  timeHHMM: string;
  /** IANA time zone of the visitor, e.g. "Europe/Berlin". */
  timeZone: string;
}

export interface CreatedDemoEvent {
  eventId: string;
  eventUrl: string;
  meetLink: string;
  startUtc: Date;
}

const DATE_RE = /^\d{4}-\d{2}-\d{2}$/;
const TIME_RE = /^([01]\d|2[0-3]):[0-5]\d$/;

export function isValidTimeZone(timeZone: string): boolean {
  try {
    new Intl.DateTimeFormat('en-US', { timeZone });
    return true;
  } catch {
    return false;
  }
}

/** Offset (ms) of `timeZone` from UTC at the given instant: local = utc + offset. */
function zoneOffsetMs(utcMs: number, timeZone: string): number {
  const parts = new Intl.DateTimeFormat('en-US', {
    timeZone,
    hourCycle: 'h23',
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
  }).formatToParts(new Date(utcMs));
  const get = (type: string): number =>
    Number(parts.find((p) => p.type === type)?.value);
  const asUtc = Date.UTC(
    get('year'),
    get('month') - 1,
    get('day'),
    get('hour'),
    get('minute'),
    get('second'),
  );
  return asUtc - Math.floor(utcMs / 1000) * 1000;
}

/** Converts a wall-clock date/time in an IANA zone to the matching UTC instant. */
export function zonedTimeToUtc(
  dateISO: string,
  timeHHMM: string,
  timeZone: string,
): Date {
  const [y, mo, d] = dateISO.split('-').map(Number);
  const [h, mi] = timeHHMM.split(':').map(Number);
  const wallAsUtc = Date.UTC(y, mo - 1, d, h, mi, 0);
  // Two passes handle offsets that change between the guess and the real instant (DST).
  let utc = wallAsUtc - zoneOffsetMs(wallAsUtc, timeZone);
  utc = wallAsUtc - zoneOffsetMs(utc, timeZone);
  return new Date(utc);
}

/** Validates the requested slot and returns its UTC start/end. */
export function resolveSlot(
  booking: Pick<DemoBooking, 'dateISO' | 'timeHHMM' | 'timeZone'>,
  now: Date = new Date(),
): { start: Date; end: Date } {
  if (!DATE_RE.test(booking.dateISO) || !TIME_RE.test(booking.timeHHMM)) {
    throw new InvalidSlotError('Invalid date or time format');
  }
  if (!isValidTimeZone(booking.timeZone)) {
    throw new InvalidSlotError('Invalid time zone');
  }
  const [y, mo, d] = booking.dateISO.split('-').map(Number);
  const probe = new Date(Date.UTC(y, mo - 1, d));
  if (probe.getUTCMonth() !== mo - 1 || probe.getUTCDate() !== d) {
    throw new InvalidSlotError('Invalid calendar date');
  }
  const start = zonedTimeToUtc(booking.dateISO, booking.timeHHMM, booking.timeZone);
  if (Number.isNaN(start.getTime())) {
    throw new InvalidSlotError('Invalid date');
  }
  const earliest = now.getTime() + MIN_LEAD_MINUTES * 60_000;
  const latest = now.getTime() + MAX_DAYS_AHEAD * 24 * 60 * 60_000;
  if (start.getTime() < earliest) {
    throw new InvalidSlotError('Please choose a time at least one hour from now');
  }
  if (start.getTime() > latest) {
    throw new InvalidSlotError('Please choose a date within the next 60 days');
  }
  return { start, end: new Date(start.getTime() + DEMO_MINUTES * 60_000) };
}

function buildDescription(b: DemoBooking): string {
  return [
    'VoxWel product demo (booked via voxwel.com)',
    '',
    `Name: ${b.name}`,
    `Email: ${b.email}`,
    `Company: ${b.company || '-'}`,
    `Company size: ${b.companySize || '-'}`,
    `Visitor time zone: ${b.timeZone}`,
    `Message: ${b.message || '-'}`,
  ].join('\n');
}

function extractMeetLink(event: calendar_v3.Schema$Event): string {
  if (event.hangoutLink) return event.hangoutLink;
  const video = event.conferenceData?.entryPoints?.find(
    (e) => e.entryPointType === 'video' && e.uri,
  );
  return video?.uri ?? '';
}

const sleep = (ms: number): Promise<void> =>
  new Promise((resolve) => setTimeout(resolve, ms));

/**
 * Checks the owner's calendar for a conflict, then creates an event with a unique
 * Google Meet room and invites the prospect (Google emails them the invite).
 *
 * Throws SlotTakenError when the slot is busy and InvalidSlotError for bad input.
 */
export async function createDemoEvent(
  credentials: GoogleCredentials,
  booking: DemoBooking,
): Promise<CreatedDemoEvent> {
  const { start, end } = resolveSlot(booking);

  const auth = new OAuth2Client(credentials.clientId, credentials.clientSecret);
  auth.setCredentials({ refresh_token: credentials.refreshToken });
  const calendar = createCalendar({ version: 'v3', auth });
  const calendarId = credentials.calendarId || 'primary';

  // 1) Ask the calendar whether the slot is free.
  const freeBusy = await calendar.freebusy.query({
    requestBody: {
      timeMin: start.toISOString(),
      timeMax: end.toISOString(),
      items: [{ id: calendarId }],
    },
  });
  const entry = freeBusy.data.calendars?.[calendarId];
  if (entry?.errors?.length) {
    throw new Error(`Free/busy lookup failed: ${JSON.stringify(entry.errors)}`);
  }
  if (entry?.busy?.length) {
    throw new SlotTakenError();
  }

  // 2) Create the event with a fresh Meet room and invite the prospect.
  const created = await calendar.events.insert({
    calendarId,
    conferenceDataVersion: 1,
    sendUpdates: 'all',
    requestBody: {
      summary: `VoxWel demo: ${booking.company || booking.name}`,
      description: buildDescription(booking),
      start: { dateTime: start.toISOString(), timeZone: booking.timeZone },
      end: { dateTime: end.toISOString(), timeZone: booking.timeZone },
      attendees: [{ email: booking.email, displayName: booking.name }],
      guestsCanModify: false,
      guestsCanInviteOthers: false,
      reminders: {
        useDefault: false,
        overrides: [
          { method: 'email', minutes: 60 },
          { method: 'popup', minutes: 10 },
        ],
      },
      extendedProperties: { private: { source: 'voxwel-demo-booking' } },
      conferenceData: {
        createRequest: {
          requestId: randomUUID(),
          conferenceSolutionKey: { type: 'hangoutsMeet' },
        },
      },
    },
  });

  const eventId = created.data.id;
  if (!eventId) {
    throw new Error('Calendar did not return an event id');
  }

  // Meet rooms are normally ready immediately; poll briefly if still pending.
  let meetLink = extractMeetLink(created.data);
  for (let attempt = 0; !meetLink && attempt < 3; attempt++) {
    await sleep(800);
    const fetched = await calendar.events.get({ calendarId, eventId });
    meetLink = extractMeetLink(fetched.data);
  }
  if (!meetLink) {
    throw new Error('Event created but Google Meet link is missing');
  }

  return {
    eventId,
    eventUrl: created.data.htmlLink ?? '',
    meetLink,
    startUtc: start,
  };
}
