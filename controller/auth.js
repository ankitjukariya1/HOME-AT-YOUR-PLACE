//external modules
const {validationResult , matchedData} = require('express-validator');
const bcrypt = require('bcrypt');

// local modules 
const User = require ('../model/signup');




// login controller

exports.loginGet = (req,res,next)=>{    
  return res.render('auth/login.ejs',{
    status :false,
    error: false,
    title: 'Login page',
    link : '/css/login.css',
    role: false
  })
}
exports.loginPost = async (req,res,next)=>{

  // input validation
   const result = validationResult(req);
   if (!result.isEmpty()){
      const errMsg = (result.errors).map(val=> val.msg );
      return res.render('auth/login.ejs',{
        status:false,
     error:errMsg,
    title:'Login page',
    link :'/css/login.css',
    role:false,
  })
   }

   // login authentication
  const {userName , password} = matchedData(req);
   const user = await User.findOne({email:userName});
   if (!user){
    return res.render('auth/login.ejs',{
    status:false,
    error:["Invalid User-Name and password"],
    title: 'Login page',
    link : '/css/login.css',
    role: false
  })
   }
   // now pass is hashed so to compared we have to use bcrypt library
   const isPasswordValid = await bcrypt.compare(password, user.password);
   if (!isPasswordValid){
    console.log('pass section')
    return res.render('auth/login.ejs', {
     status:false,
     error:["Invalid User-Name and password"],
    title: 'Login page',
    link : '/css/login.css',
    role:false,
  })
   }
// now user logedin successfully create session 
 console.log(user.accountType);
   req.session.user = {
   
     id : user.id,
     role : user.accountType,

   }
   console.log(user.accountType)
   if (user.accountType === 'owner'){
   return res.redirect('/host')}
   else if (user.accountType === 'visitor'){
   return res.redirect('/')}
}


// sign up controller

exports.signupGet = (req, res,next ) =>{
  return res.render('auth/signup.ejs',{
    error:false,
    link: '/css/signup.css',
    title: 'Signup Page',
    role:false
  })
}


exports.signupPost = async (req, res,next ) =>{
      const result = validationResult(req);
      if (!result.isEmpty()){
        const errorMsg = result.errors.map(val=>val.msg)
        return res.render('auth/signup.ejs',{
          error: errorMsg,
          link: '/css/signup.css',
          title: 'Signup Error',
          role:false
        })
      }
        // now store data in database
           // first hashing of password
           const saltRound =10;
          const hashedPassword = await bcrypt.hash(matchedData(req).password,saltRound) ;
           //now update hashed password in matchedData
          // matchedData(req).password = hashedPassword;(this is wrong because with every new call it return fresh data if we update here but later if we call again matched data it will give us again fresh data)

      //so first we store matcheddata and then update pass and then send to User
      const data = matchedData(req);
      // now update data with hashed pass
      data.password=hashedPassword;
      
      try{
        const user = new User(data);
        await user.save();
        
        return res.render('auth/login.ejs',{
          status: "Signed up Successfully now Login",
          error:false,
          title: 'Login page',
          link : '/css/login.css',
          role : false
        })
      }

      catch(err){
        console.log("Signup error: " + err);
        return res.render('auth/signup.ejs',{
          error: ["Failed to create account. Please try again."],
          link: '/css/signup.css',
          title: 'Signup Error'
        })
      }
}

// checking session
  // authentication
exports.isSession = (req,res,next)=>{

   if(!req.session.user){

    return res.redirect('/home/login');
   }
   else{
    req.user = req.session.user;
    return next();
   }
}

//authorisation

exports.isAuthorised =  (...allowedRoles)=>{
   return (req,res,next)=>{
   if (!allowedRoles.includes(req.user.role)){
      return res.redirect('/home/login');
   }
   return  next();
}}

// signout 

exports.signoutGet = (req,res,next)=>{
  return req.session.destroy((err)=>{
    if(err){ 
      console.log(err);
     return res.render('/');
    }
   res.clearCookie("connect.sid");
   return res.redirect('/home/login') ;
   
  });
}