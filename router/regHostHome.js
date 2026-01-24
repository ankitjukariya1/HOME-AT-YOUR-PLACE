const express = require('express');
const {regHostHomeGet,regHostHomePost,homeEdit,isSession,isAuthorised} = require ('../controller');
regHostHomeRouter = express.Router();
regHostHomeRouter.get('/host',isSession('required'),isAuthorised('owner'),regHostHomeGet);
regHostHomeRouter.post('/host',isSession('required'),isAuthorised('owner'),regHostHomePost);

// edit router
regHostHomeRouter.get('/home/home-edit/:id',isSession('required'),isAuthorised('owner'),homeEdit);
module.exports = {regHostHomeRouter};