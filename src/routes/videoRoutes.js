const express = require('express');
const videoController = require('../controllers/videoController');
const redirect = require('../controllers/redirect');
const path = require('path');

const router = express.Router();

router.post("/get-similar", videoController.getSimilarVideos);
router.get("/", redirect.redirect);

module.exports = router;