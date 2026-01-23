const express = require('express');
const {homeHostGet,homeHostPost,homeEdit,isSession,isAuthorised} = require ('./../controller');
homeHostRouter = express.Router();
homeHostRouter.get('/host',isSession,isAuthorised('owner'),homeHostGet);
homeHostRouter.post('/host',isSession,isAuthorised('owner'),homeHostPost);

// edit router
homeHostRouter.get('/home/home-edit/:id',isSession,isAuthorised('owner'),homeEdit);
module.exports = {homeHostRouter};