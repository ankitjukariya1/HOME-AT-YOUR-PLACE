const express = require('express');
//local module
const {loginGet , loginPost , signupGet , signupPost } = require('../controller')
const {loginValidator , signupValidator} = require('../validator/auth')

const authRouter = express.Router();
authRouter.get('/home/login', loginGet);
authRouter.post('/home/login',loginValidator,loginPost);
authRouter.get('/sign-up' , signupGet);
authRouter.post('/sign-up' ,signupValidator ,signupPost);

//export
module.exports= {authRouter};