//external modules
const {validationResult , matchedData} = require('express-validator');


// login controller

exports.loginGet = (req,res,next)=>{    
  res.render('auth/login.ejs',{
    status :false,
    error: false,
    title: 'Login page',
    link : '/css/login.css'
  })
}
exports.loginPost = (req,res,next)=>{
   const result = validationResult(req);
   if (!result.isEmpty()){
      const errMsg = (result.errors).map(val=> val.msg );
      console.log(errMsg)
      res.render('auth/login.ejs',{
        status:false,
     error:errMsg,
    title: 'Login page',
    link : '/css/login.css'
  })
   }
   else{
   console.log(result.errors);
  res.redirect('/host')}
}


// sign up controller

exports.signupGet = (req, res,next ) =>{
  res.render('auth/signup.ejs',{
    error:false,
    link: '/css/signup.css',
    title: 'Signup Page'
  })
}


exports.signupPost = (req, res,next ) =>{
      const result = validationResult(req);
      if (!result.isEmpty()){
        const errorMsg = result.errors.map(val=>val.msg)
        console.log(result.errors);
         res.render('auth/signup.ejs',{
          error: errorMsg,
          link: '/css/signup.css',
          title: 'Signup Error'
        })
      }
      else {
         res.render('auth/login.ejs',{
          status: "Signed up Successfully now Login",
          error:false,
          title: 'Login page',
          link : '/css/login.css'
          })
      }
}
