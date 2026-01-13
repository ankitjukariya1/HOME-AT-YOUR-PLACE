const express = require('express');
const { homeGet } = require('./../controller/homeC');
const homeRouter = express.Router();

// Define the route
homeRouter.get('/', homeGet);

// Export the router
module.exports = {homeRouter};