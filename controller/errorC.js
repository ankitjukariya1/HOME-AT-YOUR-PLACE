const errorC =(req,res,next)=>{
  res.render('error.ejs',{title:'Error-page',link:'/css/error.css'});
}
module.exports = errorC;