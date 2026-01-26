const express = require('express');
const {favGet,favPost, isSession, isAuthorised} = require('../controller')
const favRouter = express.Router();


favRouter.get('/favourite',isSession('required'),isAuthorised('visitor'),favGet)
favRouter.post('/favourite/:id',isSession('required'),isAuthorised('visitor'),favPost)

module.exports = {favRouter};