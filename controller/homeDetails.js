const home = require('./../model/home');
homeDetailsGet =  async ( req,res,next)=>{
  const id = req.params.id;
 let result = await home.findById(id) ;
 res.render('store/homeDetails.ejs',{title:'Home Detail Page',link:'/css/homeDetail.css',home:result});
}

module.exports={homeDetailsGet};