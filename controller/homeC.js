const {home} = require('./../model/home');


exports.homeGet =async (req,res,next)=>{
 const data = await home.find();
  res.render('store/home.ejs',{title:'Home',link:'/css/home.css', houses: data })}

