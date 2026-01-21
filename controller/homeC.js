const home= require('./../model/home');


exports.homeGet =async (req,res,next)=>{
 const data = await home.find();
 
  return res.render('store/home.ejs',{title:'Home',
    
    role: false,
    link:'/css/home.css', 
    houses: data })}

