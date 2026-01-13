const express = require('express');
//local module
const {authRouterGet , authRouterPost} = require('../controller/auth')

const authRouter = express.Router();
authRouter.get('/home/login', authRouterGet);
authRouter.post('/home/login',authRouterPost);


//export
module.exports= {authRouter};