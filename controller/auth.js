exports.authRouterGet = (req,res,next)=>{
    
  res.render('auth/login.ejs',{
    title: 'Login page',
    link : '/css/login.css'
  })
}
exports.authRouterPost = (req,res,next)=>{
  res.redirect('/host')
}