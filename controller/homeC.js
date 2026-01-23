const Home= require('./../model/home');


exports.homeGet =async (req,res,next)=>{
  let role = false;
  if (req.session.user){
      role =req.session.user.role;}
     
 const data = await Home.find();
 
  return res.render('store/home.ejs',{title:'Home',
    
    role,
    link:'/css/home.css', 
    houses: data })}

