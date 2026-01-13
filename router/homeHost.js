const express = require('express');
const {homeHostGet,homeHostPost,homeEdit} = require ('./../controller/homeHostC');
homeHostRouter = express.Router();
homeHostRouter.get('/host',homeHostGet);
homeHostRouter.post('/host',homeHostPost)
homeHostRouter.post('/home/home-edit/:id',homeEdit);
module.exports = {homeHostRouter};