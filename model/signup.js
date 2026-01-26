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
  },
  favourites : [
    {
      type : mongoose.Schema.Types.ObjectId,  // because objectid is not js type its mongodb type so we need to import it
      ref : 'Home'
    }
  ]
})
module.exports = mongoose.model('User',signupSchema);