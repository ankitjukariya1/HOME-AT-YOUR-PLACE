// external module 
const express = require('express');
const homeDetailsRouter = express.Router();
//internal modeule
const {homeDetailsGet,isSession, isAuthorised} = require('./../controller');

homeDetailsRouter.get('/home-details/:id', isSession,isAuthorised('owner','visitor'),homeDetailsGet);


module.exports={homeDetailsRouter};
