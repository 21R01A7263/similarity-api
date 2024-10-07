const express = require('express');
const videoController = require('../controllers/videoController');

const router = express.Router();

router.post("/get-similar", videoController.getSimilarVideos);

module.exports = router;