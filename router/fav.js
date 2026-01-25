const express = require('express');
const favRouter = express.Router();

favRouter.get('/favourite/:id')

module.exports = {favRouter};