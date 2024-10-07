// const youtubeService = require("../services/youtubeService");

import { join } from 'path';

function redirect(req, res) {
  res.sendFile(join(__dirname, "/index.html"));
}

module.exports = {
  redirect
};