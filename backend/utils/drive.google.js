require("dotenv").config();
const { google } = require("googleapis");
const path = require("path");
const fs = require("fs");

const CLIENT_ID = process.env.CLIENT_ID;
const CLIENT_SECRET = process.env.CLIENT_SECRET;
const REDIRECT_URI = process.env.REDIRECT_URI;
const REFRESH_TOKEN = process.env.REFRESH_TOKEN;

const oauth2client = new google.auth.OAuth2(
  CLIENT_ID,
  CLIENT_SECRET,
  REDIRECT_URI
);
oauth2client.setCredentials({ refresh_token: REFRESH_TOKEN });

const drive = google.drive({
  version: "v3",
  auth: oauth2client,
});

const folderId = process.env.folderId;

const uploadFile = async (file, filename) => {
  try {
    const response = await drive.files.create({
      requestBody: {
        name: filename,
        MimeType: "image/jpg",
        parents: [folderId],
      },
      media: {
        mimeType: "image/jpg",
        body: file,
      },
    });
    return response.data.id
  } catch (error) {
    console.log(error.message);
  }
};

const generateUrl = async (fileId) => {
  try {
    const result = await drive.files.get({
      fileId: fileId,
      fields: "webViewLink",
    });
    return result.data.webViewLink;
  } catch (error) {
    console.log(error.message);
  }
};

module.exports = { uploadFile, generateUrl };
