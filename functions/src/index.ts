import * as functions from 'firebase-functions';
import { defineSecret } from 'firebase-functions/params';
import * as nodemailer from 'nodemailer';
import * as cors from 'cors';

const spacemailUser = defineSecret('SPACEMAIL_USER');
const spacemailPass = defineSecret('SPACEMAIL_PASS');
const meetLink = defineSecret('GOOGLE_MEET_LINK');

const corsHandler = cors({
  origin: [
    'https://voxwel.com',
    'https://www.voxwel.com',
    'https://voxwel-web.web.app',
    'https://voxwel-web.firebaseapp.com',
    'http://localhost:3000',
  ],
});

const escapeHtml = (value: unknown): string =>
  String(value ?? '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export const sendDemoBooking = functions
  .runWith({ secrets: ['SPACEMAIL_USER', 'SPACEMAIL_PASS', 'GOOGLE_MEET_LINK'] })
  .https.onRequest((req, res) => {
    corsHandler(req, res, async () => {
      if (req.method !== 'POST') {
        res.status(405).json({ error: 'Method not allowed' });
        return;
      }

      try {
        const transporter = nodemailer.createTransport({
          host: 'mail.spacemail.com',
          port: 465,
          secure: true,
          auth: {
            user: spacemailUser.value(),
            pass: spacemailPass.value(),
          },
        });

        const body = req.body || {};
        const email = String(body.email || '').trim();
        if (!EMAIL_RE.test(email)) {
          res.status(400).json({ error: 'Invalid email address' });
          return;
        }

        const name = escapeHtml(body.name);
        const company = escapeHtml(body.company);
        const companySize = escapeHtml(body.companySize);
        const meetingDate = escapeHtml(body.meetingDate);
        const meetingTime = escapeHtml(body.meetingTime);
        const timezone = escapeHtml(body.timezone);
        const message = escapeHtml(body.message);
        const safeEmail = escapeHtml(email);

        const resolvedMeetLink = meetLink.value().trim();

        // Email 1: Confirmation to prospect
        await transporter.sendMail({
          from: '"Maduranga from VoxWel" <maduranga@voxwel.com>',
          to: email,
          replyTo: 'maduranga@voxwel.com',
          subject: `Your VoxWel Demo — ${meetingDate} at ${meetingTime}`,
          html: `
            <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 32px; color: #1e293b;">
              <div style="margin-bottom: 32px;">
                <img src="https://voxwel.com/logo.png" alt="VoxWel" height="36" />
              </div>
              <h2 style="font-size: 22px; font-weight: 700; color: #0f172a; margin-bottom: 8px;">
                Your demo is confirmed ✅
              </h2>
              <p style="color: #475569; margin-bottom: 32px;">
                Hi ${name}, here are your meeting details:
              </p>
              <div style="background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 12px; padding: 24px; margin-bottom: 32px;">
                <table style="width: 100%; border-collapse: collapse;">
                  <tr>
                    <td style="padding: 8px 0; color: #64748b; font-size: 14px; width: 120px;">📅 Date</td>
                    <td style="padding: 8px 0; color: #0f172a; font-weight: 600;">${meetingDate}</td>
                  </tr>
                  <tr>
                    <td style="padding: 8px 0; color: #64748b; font-size: 14px;">⏰ Time</td>
                    <td style="padding: 8px 0; color: #0f172a; font-weight: 600;">${meetingTime} <span style="color:#64748b;font-weight:400;font-size:13px;">(${timezone})</span></td>
                  </tr>
                  <tr>
                    <td style="padding: 8px 0; color: #64748b; font-size: 14px;">⏱ Duration</td>
                    <td style="padding: 8px 0; color: #0f172a; font-weight: 600;">20 minutes</td>
                  </tr>
                </table>
              </div>
              <div style="text-align: center; margin-bottom: 32px;">
                <a href="${resolvedMeetLink}"
                   style="display: inline-block; background: #1abc9c; color: white; text-decoration: none;
                          padding: 14px 32px; border-radius: 8px; font-weight: 700; font-size: 16px;">
                  🔗 Join Google Meet
                </a>
              </div>
              <p style="color: #475569; font-size: 14px; line-height: 1.6; margin-bottom: 24px;">
                I'll walk you through VoxWel live — no slides, just the product.
                If you need to reschedule or have questions before the call,
                just reply to this email.
              </p>
              <div style="border-top: 1px solid #e2e8f0; padding-top: 24px; color: #64748b; font-size: 13px;">
                <strong style="color: #0f172a;">Maduranga</strong><br/>
                Founder, VoxWel<br/>
                <a href="https://voxwel.com" style="color: #1abc9c;">voxwel.com</a>
              </div>
            </div>
          `,
        });

        // Email 2: Internal copy to Madu
        await transporter.sendMail({
          from: '"VoxWel Bookings" <maduranga@voxwel.com>',
          to: 'maduranga@voxwel.com',
          subject: `New Demo Booking — ${company} — ${meetingDate} at ${meetingTime}`,
          html: `
            <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 32px; color: #1e293b;">
              <h2 style="font-size: 20px; font-weight: 700; color: #0f172a; margin-bottom: 24px;">
                📅 New Demo Booking
              </h2>
              <div style="background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 12px; padding: 24px; margin-bottom: 24px;">
                <table style="width: 100%; border-collapse: collapse;">
                  <tr>
                    <td style="padding: 8px 0; color: #64748b; font-size: 14px; width: 140px;">Name</td>
                    <td style="padding: 8px 0; color: #0f172a; font-weight: 600;">${name}</td>
                  </tr>
                  <tr>
                    <td style="padding: 8px 0; color: #64748b; font-size: 14px;">Email</td>
                    <td style="padding: 8px 0;"><a href="mailto:${safeEmail}" style="color: #1abc9c;">${safeEmail}</a></td>
                  </tr>
                  <tr>
                    <td style="padding: 8px 0; color: #64748b; font-size: 14px;">Company</td>
                    <td style="padding: 8px 0; color: #0f172a; font-weight: 600;">${company}</td>
                  </tr>
                  <tr>
                    <td style="padding: 8px 0; color: #64748b; font-size: 14px;">Company Size</td>
                    <td style="padding: 8px 0; color: #0f172a;">${companySize}</td>
                  </tr>
                  <tr>
                    <td style="padding: 8px 0; color: #64748b; font-size: 14px;">Date</td>
                    <td style="padding: 8px 0; color: #0f172a; font-weight: 600;">${meetingDate}</td>
                  </tr>
                  <tr>
                    <td style="padding: 8px 0; color: #64748b; font-size: 14px;">Time</td>
                    <td style="padding: 8px 0; color: #0f172a; font-weight: 600;">${meetingTime} (${timezone})</td>
                  </tr>
                  <tr>
                    <td style="padding: 8px 0; color: #64748b; font-size: 14px;">Message</td>
                    <td style="padding: 8px 0; color: #0f172a;">${message || 'None'}</td>
                  </tr>
                </table>
              </div>
              <a href="${resolvedMeetLink}" style="color: #1abc9c;">🔗 Meet Link</a>
            </div>
          `,
        });

        res.status(200).json({ success: true });

      } catch (error) {
        console.error('Email send error:', error);
        res.status(500).json({ error: 'Failed to send email' });
      }
    });
  });
