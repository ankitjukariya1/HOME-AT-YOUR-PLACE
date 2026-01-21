// external modules
const express = require('express');
const path = require('path');
const mongoose = require ('mongoose');
const dotenv = require('dotenv');
const session = require ('express-session');
const { MongoStore } = require('connect-mongo');

// Load environment variables
dotenv.config();

// local module
const {homeRouter} = require ('./router/home');
const {regHomeRouter} = require ('./router/regHome');
const {homeDetailsRouter} = require('./router/homeDetails');
const {homeHostRouter} = require ('./router/homeHost');
const errorRouter = require('./router/error');
const {authRouter} = require('./router/auth');





//create server 

 const app = express();
 const port = process.env.PORT || 3001;

    //app.listen shifted in database connection
 
// connect with database
 mongoose.connect(process.env.MONGODB_URL)
 .then(()=>{console.log('Database connected');
  app.listen(port,()=>{
  console.log(`server is running at port no. ${port}`);
 })
 })
 .catch((err)=>{
    console.log(err);
  })
 // create session 
app.use(session({
   secret: process.env.session_secret,
   resave: false,
   saveUninitialized: false,
   store: MongoStore.create({
      mongoUrl : process.env.MONGODB_URL,
   }),
  cookie: { 
   httpOnly: true
}}))

 //ejs handling
app.set('view engine','ejs');
app.set('views','views'); // no need in case my ejs folder name is views

// serving css file make this path static
app.use(express.static(path.join(__dirname,'public')));

// encoding the data

app.use(express.urlencoded({ limit: '10mb', extended: true }));  // needed for parsing data (req.body) its used for parsing data that is comming from browser for parsing data comming from react and postman we need app.use(express.json()); otherwise we get undefined as a data
app.use(express.json({ limit: '10mb' }));

 // routing management
app.use(homeRouter);
app.use(regHomeRouter);
app.use(homeDetailsRouter);
app.use(homeHostRouter);
// app.use(contact-us);

app.use (authRouter);
app.use(errorRouter); // it should be in last 