const express = require('express');
const { homeGet ,isAuthorised,  } = require('./../controller');
const homeRouter = express.Router();

// Define the route
homeRouter.get('/',   homeGet);

// Export the router
module.exports = {homeRouter};