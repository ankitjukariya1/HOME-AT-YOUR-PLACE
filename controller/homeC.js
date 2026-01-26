const Home= require('./../model/home');
const User = require('../model/signup')


exports.homeGet =async (req,res,next)=>{
  //in case user is not loged in
  let role = false;
  let favourites = [];
  // in case user loged in
  if (req.session.user){
     
      role =req.session.user.role;
      
     const result = await User.findById ( req.session.user.id).select("favourites");  // it will return an object with id and fav 
      // instead of this we can do user= await Home.findById(id) ; 
      // if (user.favourites){ favourites = user.favourites} but this is not optimised bcz if we do this it will send us whole user instead of only favourites and id
      favourites= result? result.favourites : []; //check user persist or not
      
    }
     
 const data = await Home.find();
 
  return res.render('store/home.ejs',{
    title:'Home',
    favourites,
    role,
    link:'/css/home.css', 
    houses: data })}

