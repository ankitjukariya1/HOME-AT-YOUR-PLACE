const mongoose = require('mongoose');

signupSchema = new mongoose.Schema({
  firstName : {
    type: String,
    required: [true,'First name is required'],
    trim: true,
  },
  lastName : {
    type : String,
    required : true
  },
  email : {
    type: String,
    required : true,
  },
  contactNo : {
    type : String,
    required : true
  },
  accountType : {
    type : String,
    required:true,
  },
  password : {
    type : String,
    required : true,
  }
})
module.exports = mongoose.model('user',signupSchema);