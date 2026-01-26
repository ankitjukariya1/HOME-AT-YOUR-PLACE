const errorC =(req,res,next)=>{
  return res.render('error.ejs',{title:'Error-page',
    role: false,
    link:'/css/error.css'});
}
module.exports = {errorC};