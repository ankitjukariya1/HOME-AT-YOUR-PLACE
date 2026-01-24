const {regHomeGet ,regHomePost} = require ('./regHomeC');
const { regHostHomeGet, regHostHomePost, homeEdit} = require ('./regHostHomeC');
const {homeDetailsGet} = require ('./homeDetails');
const {homeGet} = require ('./homeC');
const errorC= require ('./errorC');
const {loginGet ,loginPost,signupGet,signupPost,isSession, isAuthorised,signoutGet} = require ('./auth')
module.exports ={regHomeGet ,regHomePost, regHostHomeGet, regHostHomePost, homeEdit,homeDetailsGet,homeGet,errorC,loginGet,loginPost,signupGet,signupPost,isSession,isAuthorised ,signoutGet}