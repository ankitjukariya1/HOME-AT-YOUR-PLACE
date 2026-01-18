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

module.exports = {
  home: mongoose.model('home',homeSchema)
  }




/*
const fs = require ('fs');
let regHome=[];
class home {
  constructor (houseName,price,contactNo,address,image,id){
    this.houseName = houseName,
    this.price = price;
    this.contactNo = contactNo;
    this.address = address;
    this.image = image;
    this.id = id;
  }
  save (){
    regHome.push(this);
    fs.writeFile('home.txt',`${JSON.stringify(regHome)}`,(err)=>{
      err?console.error(err): console.log('Your data loaded successfully');
    })
  }
  
  
  static async fetchAll (){
     try {
     const data = await fs.promises.readFile ('home.txt','utf8');
      const parsedData =  JSON.parse(data);
      return parsedData;}
      catch(err){
        console.log('Your file is empty');
        return [];
      }
   }

   static async lastId  (){ 
    try{
     const house = await home.fetchAll();
      return house.at(-1).id ;}
      catch (err){
        return 0;
      }
   }

   static async getHome (i){
    let result;
    const homes = await home.fetchAll();
      homes.forEach(element => {
    if (element.id==i){
      result = element;
   }});
    return result;
   }
  }
module.exports= home; */