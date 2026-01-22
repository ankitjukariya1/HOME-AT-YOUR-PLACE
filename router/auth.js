const express = require('express');
//local module
const {loginGet , loginPost , signupGet , signupPost, signoutGet } = require('../controller')
const {loginValidator , signupValidator} = require('../validator/auth')

const authRouter = express.Router();
authRouter.get('/home/login', loginGet);
authRouter.post('/home/login',loginValidator,loginPost);
authRouter.get('/sign-up', signupGet);
authRouter.post('/sign-up' ,signupValidator ,signupPost);
authRouter.get('/sign-out',signoutGet)
//export
module.exports= {authRouter};