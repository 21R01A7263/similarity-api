// const youtubeService = require("../services/youtubeService");

function redirect(req, res) {
  res.sendFile(path.join(__dirname, "index.html"));
}

module.exports = {
  redirect,
};
