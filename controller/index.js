const {regHomeGet ,regHomePost} = require ('./regHomeC');
const { homeHostGet, homeHostPost, homeEdit} = require ('./homeHostC');
const {homeDetailsGet} = require ('./homeDetails');
const {homeGet} = require ('./homeC');
const errorC= require ('./errorC');
module.exports ={regHomeGet ,regHomePost, homeHostGet, homeHostPost, homeEdit,homeDetailsGet,homeGet,errorC}