const express = require('express');
// local module 
const {regHomeGet,regHomePost,isSession,isAuthorised}= require('./../controller')
const {regValidator} = require('./../validator/homereg')
const regHomeRouter = express.Router();
regHomeRouter.get('/reg-home',isSession('required'),isAuthorised('owner'),regHomeGet);
regHomeRouter.post('/reg-home',isSession('required'),isAuthorised('owner'), regValidator, regHomePost);
module.exports = {regHomeRouter};
