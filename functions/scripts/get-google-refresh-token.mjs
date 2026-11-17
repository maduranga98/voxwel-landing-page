// One-time helper: obtains the refresh token the booking function uses to create
// Google Calendar events with Google Meet links on your behalf.
//
// Usage (from the functions/ folder):
//   GOOGLE_CLIENT_ID=... GOOGLE_CLIENT_SECRET=... node scripts/get-google-refresh-token.mjs
//
// Use a "Desktop app" OAuth client. Sign in as the Google account whose calendar
// should receive the bookings (e.g. maduranga@voxwel.com).
import http from 'node:http';
import { OAuth2Client } from 'google-auth-library';

const clientId = process.env.GOOGLE_CLIENT_ID;
const clientSecret = process.env.GOOGLE_CLIENT_SECRET;
if (!clientId || !clientSecret) {
  console.error('Set GOOGLE_CLIENT_ID and GOOGLE_CLIENT_SECRET first.');
  process.exit(1);
}

const PORT = 53682;
const redirectUri = `http://127.0.0.1:${PORT}`;
const client = new OAuth2Client(clientId, clientSecret, redirectUri);

const url = client.generateAuthUrl({
  access_type: 'offline',
  prompt: 'consent', // forces a refresh token even if you authorised before
  scope: [
    'https://www.googleapis.com/auth/calendar.events',
    'https://www.googleapis.com/auth/calendar.freebusy',
  ],
});

const server = http.createServer(async (req, res) => {
  const code = new URL(req.url, redirectUri).searchParams.get('code');
  if (!code) {
    res.end('Waiting for Google...');
    return;
  }
  try {
    const { tokens } = await client.getToken(code);
    res.end('Done. You can close this tab and return to the terminal.');
    if (!tokens.refresh_token) {
      console.error(
        '\nNo refresh token returned. Remove the app at https://myaccount.google.com/permissions and run this again.',
      );
    } else {
      console.log('\nGOOGLE_REFRESH_TOKEN (store it as a Firebase secret, never commit it):\n');
      console.log(tokens.refresh_token);
    }
  } catch (error) {
    res.end('Token exchange failed. See terminal.');
    console.error(error);
  } finally {
    server.close();
  }
});

server.listen(PORT, () => {
  console.log('Open this URL in your browser and approve access:\n');
  console.log(url + '\n');
});
