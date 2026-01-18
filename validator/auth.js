const {body} = require('express-validator');
//local module
const signupSchema = require ('../model/signup')

exports.loginValidator = [ 
  body('userName')
  .trim()
  .isString()
  .notEmpty().withMessage('user name should not be empty '),
  body('password')
  .trim()
  .isStrongPassword({
    minLength : 5
  }).withMessage('Password must be at least 5 characters long and include at least one number, one lowercase letter, one uppercase letter, and one special character.')
  
]

exports.signupValidator =[
  //first name
  body('firstName')
  .trim()
  .isString()
  .notEmpty().withMessage('User name should not be Empty'),
  // last name
  body('lastName')
  .trim(),
  // Email
  body('email')
  .trim()
  .toLowerCase()
  .isEmail().withMessage('Enter valid Email')
  .custom(async val=>{
  
    const user = await signupSchema.findOne({
      email : val 
    })
     if (user) throw new Error("User is alerady registered with this Email id");
  }),
  // contact
  body('contactNo')
  .trim()
  .notEmpty().withMessage('Enter contact no.')
  .custom(async (val)=>{
      // checking if user exist with this phone no
       const user = await signupSchema.findOne({contactNo: val});
       if (user){
        throw new Error ("User is alerady registered with this Contact number ")
        
       }
      }), 
  //userType
  body('accountType')
  .notEmpty().withMessage('Select any from Account type'),

  // password
  body('password')
  .trim()
  .isStrongPassword(
    {
      minLength:5
    }
  ).withMessage('Password must be at least 5 characters long and include at least one number, one lowercase letter, one uppercase letter, and one special character.')
  ,

  // confirm password
  body('confirmPassword')
  .trim()
  .custom((val,{req})=> val===req.body.password.trim())
  .withMessage('Password and Confirm password should be same')

]