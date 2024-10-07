const express = require('express');
const videoController = require('../controllers/redirect');

const router = express.Router();

router.get("/", videoController.redirect);

module.exports = router;