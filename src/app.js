const express = require('express');
const videoRoutes = require('./routes/videoRoutes');
const landingPage = require('./routes/landingPage');
const cors = require("cors"); 
require("dotenv").config();
const app = express();
app.use(cors())

app.use(express.json());
app.use('/api', videoRoutes);
app.use('/', landingPage);

module.exports = app;