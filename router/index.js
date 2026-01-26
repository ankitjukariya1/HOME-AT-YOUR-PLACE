const {homeRouter} = require ('./home');
const {regHomeRouter} = require ('./regHome');
const {homeDetailsRouter} = require('./homeDetails');
const {regHostHomeRouter} = require ('./regHostHome');
const {errRouter} = require('./error');
const {authRouter} = require('./auth');
const {favRouter} = require('./fav');

module.exports = {homeRouter,regHostHomeRouter,regHomeRouter,homeDetailsRouter,errRouter,authRouter,favRouter}