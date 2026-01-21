const {regHomeGet ,regHomePost} = require ('./regHomeC');
const { homeHostGet, homeHostPost, homeEdit} = require ('./homeHostC');
const {homeDetailsGet} = require ('./homeDetails');
const {homeGet} = require ('./homeC');
const errorC= require ('./errorC');
const {loginGet ,loginPost,signupGet,signupPost,isSession, isAuthorised} = require ('./auth')
module.exports ={regHomeGet ,regHomePost, homeHostGet, homeHostPost, homeEdit,homeDetailsGet,homeGet,errorC,loginGet,loginPost,signupGet,signupPost,isSession,isAuthorised}