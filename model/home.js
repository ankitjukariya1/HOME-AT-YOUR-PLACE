const mongoose = require('mongoose');
const homeSchema = new mongoose.Schema({
  houseName : { 
    type: String, 
    required: [true, 'House name is required'],
    trim: true,
    minlength: [3, 'House name must be at least 3 characters']
  },
  price : {
    type: Number, 
    required: [true, 'Price is required'],
    min: [0, 'Price cannot be negative']
  },
  contactNo : {
    type: Number, 
    required: [true, 'Phone number is required'],
  },
  address : {
    type: String, 
    required: [true, 'Address is required'],
    minlength: [5, 'Address must be at least 5 characters']
  },
  image : {
    type: String,
    default: null
  },
  description : {
    type: String,
    maxlength: [1000, 'Description cannot exceed 1000 characters']
  },
  userId : {
     type : mongoose.Schema.Types.ObjectId,  // always store id in this format it will help in .populate
     ref: 'User'
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date,
    default: Date.now
  }
});

//module.exports = homeSchema; wrong because we exporting schema not models

module.exports = mongoose.model('Home',homeSchema);




