const express = require('express');
//local module
const {loginGet , loginPost , signupGet , signupPost, signoutGet,isSession } = require('../controller')
const {loginValidator , signupValidator} = require('../validator/auth')

const authRouter = express.Router();
authRouter.get('/home/login',isSession('notRequired'), loginGet);
authRouter.post('/home/login',loginValidator,isSession('notRequired'),loginPost);
authRouter.get('/sign-up',isSession('notNeeded'), signupGet);
authRouter.post('/sign-up' ,signupValidator ,isSession('notRequired'),signupPost);
authRouter.get('/sign-out',isSession('required'),signoutGet)
//export
module.exports= {authRouter};