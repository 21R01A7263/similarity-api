// const youtubeService = require("../services/youtubeService");

import { join } from 'path';

function redirect(req, res) {
  res.sendFile(join(__dirname, "/index.html"));
}

export default {
  redirect
};
