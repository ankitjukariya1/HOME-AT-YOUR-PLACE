//external modules
const {validationResult , matchedData} = require('express-validator');
const bcrypt = require('bcrypt');

// local modules 
const signupSchema = require ('../model/signup')


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


exports.signupPost = async (req, res,next ) =>{
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
        // now store data in database
           // first hashing of password
           const saltRound =10;
          const hashedPassword = await bcrypt.hash(matchedData(req).password,saltRound) ;
          console.log(hashedPassword);
           //now update hashed password in matchedData
          // matchedData(req).password = hashedPassword;(this is wrong because with every new call it return fresh data if we update here but later if we call again matched data it will give us again fresh data)

          //so first we store matcheddata and then update pass and then send to signupSchema
          const data = matchedData(req);
          // now update data with hashed pass
          data.password=hashedPassword;
        try{
         const user = new signupSchema(data);
         await user.save();
         }
         catch(err){
            console.log("something is wrong" + err);
         }
         res.render('auth/login.ejs',{
          status: "Signed up Successfully now Login",
          error:false,
          title: 'Login page',
          link : '/css/login.css'
          })
      }
}
