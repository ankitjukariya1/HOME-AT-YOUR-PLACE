const express = require('express');
// local module 
const {regHomeGet,regHomePost}= require('./../controller')
const {regValidator} = require('./../validator/homereg')
const regHomeRouter = express.Router();
regHomeRouter.get('/reg-home',regHomeGet);
regHomeRouter.post('/reg-home', regValidator,regHomePost);
module.exports = {regHomeRouter};
