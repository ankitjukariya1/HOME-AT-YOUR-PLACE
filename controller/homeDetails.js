const home = require('./../model/home');
homeDetailsGet =  async ( req,res,next)=>{
  try{
    const id = req.params.id;
    //to allow only homeOwner can acess edit in home details page
    let homeOwner = true;
   if(req.user.id != (await home.findById(id)).userId){
    homeOwner = false;
   }
  
 let result = await home.findById(id) ;
 return res.render('store/homeDetails.ejs',{title:'Home Detail Page',
  link:'/css/homeDetail.css',
  home:result,
  role:req.user.role,
  homeOwner
});}
catch (err) {
    console.log(err);
    return res.redirect('/error')
    
  }
}

module.exports={homeDetailsGet}