const express=  require ('express');
//local module
const {errorC} = require('../controller');

const errRouter = express.Router();
errRouter.use(errorC);

module.exports = {errRouter};
