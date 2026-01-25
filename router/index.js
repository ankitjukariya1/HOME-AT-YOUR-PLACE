const {homeRouter} = require ('./home');
const {regHomeRouter} = require ('./regHome');
const {homeDetailsRouter} = require('./homeDetails');
const {regHostHomeRouter} = require ('./regHostHome');
const {errorRouter} = require('./error');
const {authRouter} = require('./router/auth');
const {favRouter} = require('./router/auth');

module.exports = {homeRouter,regHostHomeRouter,regHomeRouter,homeDetailsRouter,errorRouter,authRouter,favRouter}