# Demo bookings -> Google Calendar + Google Meet

When a visitor books a demo, `sendDemoBooking` (Firebase Function) now:

1. Asks your Google Calendar whether the slot is free (free/busy lookup).
2. If busy, answers `409` and the form asks the visitor to pick another time. No emails are sent.
3. If free, creates a 15-minute event with its **own** Google Meet room, invites the visitor
   (Google emails them the invite and an .ics file) and sends the existing branded emails
   with that unique Meet link.
4. If Google's API fails for any other reason, the booking is not lost: the old static
   `GOOGLE_MEET_LINK` is used and the internal email carries a warning to add the event manually.

## One-time setup

1. **Enable the API.** Google Cloud console, project `company-voice-ba26f` -> APIs & Services ->
   enable **Google Calendar API**.
2. **OAuth consent screen.** If `maduranga@voxwel.com` is a Google Workspace account choose
   **Internal**. Otherwise choose External and **publish it to Production**. Apps left in
   "Testing" have refresh tokens that expire after 7 days, which would silently break bookings.
3. **OAuth client.** Credentials -> Create credentials -> OAuth client ID -> **Desktop app**.
   Copy the client ID and secret.
4. **Get the refresh token** (signed in as the calendar owner):
   ```bash
   cd functions
   GOOGLE_CLIENT_ID=... GOOGLE_CLIENT_SECRET=... node scripts/get-google-refresh-token.mjs
   ```
   Open the printed URL, approve, copy the printed token.
5. **Store the secrets** (from the repo root):
   ```bash
   firebase functions:secrets:set GOOGLE_CLIENT_ID
   firebase functions:secrets:set GOOGLE_CLIENT_SECRET
   firebase functions:secrets:set GOOGLE_REFRESH_TOKEN
   ```
   `GOOGLE_MEET_LINK` stays as the emergency fallback.
6. **Optional.** To use a calendar other than the account's primary one, set the
   `GOOGLE_CALENDAR_ID` environment variable on the function.
7. **Deploy.** `firebase deploy --only functions:sendDemoBooking`, then book a test demo with an
   email address you control and check the invite, the Meet link and the calendar entry.

## Behaviour to know about

- The slot list in the form is 09:00-17:00 in the **visitor's** time zone. The calendar check
  only blocks times you are busy; it does not enforce your own working hours. Block your
  off-hours in Google Calendar (working hours / "busy" events) or ask for a server-side
  working-hours rule.
- Free/busy then insert is not atomic. Two visitors submitting the same slot within a second
  could both succeed. At demo-booking volume this is negligible.
- Older cached pages that do not send `meetingDateISO`/`meetingTimeISO` still work: they get the
  static Meet link and no calendar event.
