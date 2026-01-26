const {regHomeGet ,regHomePost} = require ('./regHomeC');
const { regHostHomeGet, regHostHomePost, homeEdit} = require ('./regHostHomeC');
const {homeDetailsGet} = require ('./homeDetails');
const {homeGet} = require ('./homeC');
const {errorC} = require ('./errorC');
const {loginGet ,loginPost,signupGet,signupPost,isSession, isAuthorised,signoutGet} = require ('./auth')
const {favGet,favPost} = require('./favC');
module.exports ={regHomeGet ,regHomePost, regHostHomeGet, regHostHomePost, homeEdit,homeDetailsGet,homeGet, errorC ,loginGet,loginPost,signupGet,signupPost,isSession,isAuthorised ,signoutGet,favGet,favPost}