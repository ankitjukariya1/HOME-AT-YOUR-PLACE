const express = require('express');
// local module 
const {regHomeGet,regHomePost}= require('./../controller/regHomeC')
const regHomeRouter = express.Router();
regHomeRouter.get('/reg-home',regHomeGet);
regHomeRouter.post('/reg-home',regHomePost);
module.exports = {regHomeRouter};
