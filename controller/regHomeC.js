const { ResultWithContextImpl } = require("express-validator/lib/chain");
let home = require("./../model/home");
const {validationResult , matchedData} = require ('express-validator')

exports.regHomeGet = (req, res, next) => {
  return res.render("host/regHomeGet.ejs", {
    error:false,
    userId : req.user.id,
    title: "Register",
    link: "/css/regHomeGet.css",
    role: req.user.role
  });
};

exports.regHomePost = async (req, res, next) => {
  // input validation
  try {
   const result = validationResult(req);
   
    if (!result.isEmpty()){
      errorMsg = result.errors.map(val=>{
        return val.msg;
      })
      const { houseName, price, contactNo, address, image, description,userId } = req.body;
      return res.render('host/regHomeGet.ejs',{
        error: errorMsg,
        houseName,
        price,
        contactNo,
        address,
        image,
        description,
        title: "Registere Again",
        link: "/css/regHomeGet.css",
        role: req.user.role
      })
    }  //  if (result.isEmpty()){
 
  //  }
    //const {houseName, price, contactNo, address, image} = req.body;  since now we need to pass whole object directly in schema we dont need to destructure this req.body send us object which we can send diretly

    let house = new home (matchedData(req)); // constructor
    await house.save();

    const { houseName, price, contactNo, address, image, description } = matchedData(req);
  
    return res.render("host/regHomePost.ejs", {
      houseName,
      price,
      contactNo,
      address,
      image,
      description,
      title: "Registered-Home",
      link: "/css/regHomePost.css",
      role : req.user.role
    })
  }
  catch (err){
    console.log("Registration error: " + err);
    return res.render('host/regHomeGet.ejs',{
      error: ["Failed to register home. Please try again."],
      title: "Register",
      link: "/css/regHomeGet.css",
      role:req.user.role
    })
  }
}
