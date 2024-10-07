// const youtubeService = require("../services/youtubeService");

const path = require('path');

function redirect(req, res) {
  res.sendFile(path.join(__dirname, "getpage.html"));
}

module.exports = {
  redirect
};
