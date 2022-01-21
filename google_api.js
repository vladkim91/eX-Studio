require('dotenv').config();
const { google } = require('googleapis');

const oauth2Client = new google.auth.OAuth2(
  process.env.GCID,
  process.env.GCS,
  process.env.GRURI
);

google.options({ auth: oauth2Client });

// const authorizeUrl = oauth2Client.generateAuthUrl({
//   access_type: 'offline',
//   scope: 'https://www.googleapis.com/auth/userinfo.email'
// });

module.exports = oauth2Client;