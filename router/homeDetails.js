// external module 
const express = require('express');
const homeDetailsRouter = express.Router();
//internal modeule
const {homeDetailsGet} = require('./../controller/homeDetails');

homeDetailsRouter.get('/home-details/:id',homeDetailsGet);


module.exports={homeDetailsRouter};
