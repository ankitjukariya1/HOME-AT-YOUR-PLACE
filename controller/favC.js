const User = require ('../model/signup')
exports. favGet = async (req,res,next)=>{
   user = await User.findById(req.user.id).populate('favourites');
    res.render ('store/fav.ejs',{
      title: 'Favourites',
      link: '/css/fav.css',
      favourites : user.favourites,
      role : req.user.role
    })
    
}
exports.favPost = async (req,res,next)=>{
  const houseId = req.params.id;
  const action  = req.body.action;
  if (action==='makeFav'){
    console.log('I entered here');
    await User.findByIdAndUpdate(req.user.id,{
      $addToSet : {favourites : houseId } // by using addToSet we can avoid duplicates also unlike push
    })
    return res.redirect('/');
  }
  else if (action==='removeFav'){
   await User.findByIdAndUpdate(req.user.id,{  //findByIdAndDelete will delete whole array not particular entry
      $pull : {favourites : houseId }
      
    })
    return res.redirect('/');
  }

}