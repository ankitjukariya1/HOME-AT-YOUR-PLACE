const{ body } = require ('express-validator');

exports.regValidator= [
  body("houseName")
  .trim()
  .notEmpty().withMessage("House name must have some value")
  .isLength({min : 5 }).withMessage('House Name have atleast 5 character'),

  body('price')
  .trim()
  .notEmpty().withMessage('Price is must')  // put before changing to float otherwise it change empty string into 0
  .toFloat()
  .isFloat({min:100,max:5000}).withMessage('Price should be in the range of 100 to 5000'),

  body('contactNo')
  .trim()
  .isMobilePhone()
  .withMessage("Invalid contact no.")
  ,
   
  body('address')
  .trim()
  .notEmpty().withMessage('Address must require')
  .isLength({min:5}).withMessage('Address must have atleast 5 characters') ,

  body('description')
  .trim()
  .isLength({max:1000}).withMessage('Description cannot exceed 1000 characters'),

  body('userId')
  
   
]