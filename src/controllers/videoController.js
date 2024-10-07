const youtubeService = require("../services/youtubeService");

async function getSimilarVideos(req, res) {
  const { videoUrl } = req.body;

  if (!videoUrl) {
    return res.status(400).json({ error: "Video URL is required" });
  }

  const videoId = extractVideoId(videoUrl);

  if (!videoId) {
    return res.status(400).json({ error: "Could not extract video ID from the provided URL" });
  }

  try {
    const videoDetails = await youtubeService.getVideoDetails(videoId);
    const similarVideos = await youtubeService.searchSimilarVideos(
      videoDetails,
      videoId
    );
    res.json(similarVideos);
  } catch (error) {
    console.error("Error:", error.message);
    res.status(500).json({ error: "An error occurred while processing the request" });
  }
}

function extractVideoId(url) {
  const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
  const match = url.match(regExp);
  return (match && match[2].length === 11) ? match[2] : null;
}

module.exports = {
  getSimilarVideos,
};