const { ResultWithContextImpl } = require("express-validator/lib/chain");
let {home} = require("./../model/home");
const {validationResult , matchedData} = require ('express-validator')

exports.regHomeGet = (req, res, next) => {
  res.render("host/regHomeGet.ejs", {
    error:false,
    title: "Register",
    link: "/css/regHomeGet.css",
  });
};

exports.regHomePost = async (req, res, next) => {
  try {
   const result = validationResult(req);
   
    if (!result.isEmpty()){
      errorMsg = result.errors.map(val=>{
        return val.msg;
      })
      const { houseName, price, phoneNo, address, image, description } = req.body;
        res.render('host/regHomeGet.ejs',{
          error: errorMsg,
          houseName,
          price,
          phoneNo,
          address,
          image,
          description,
          title: "Registere Again",
          link: "/css/regHomeGet.css",
        })
   }

  else{  //  if (result.isEmpty()){
  //   console.log("error is there");
  //   console.log(result.errors);
  //  }
  //const {houseName, price, phoneNo, address, image} = req.body;  since now we need to pass whole object directly in schema we dont need to destructure this req.body send us object which we can send diretly

  
    
  let house = new home (matchedData(req)); // constructor
    await house.save();
    console.log("i am  below here");

     const { houseName, price, phoneNo, address, image, description } = matchedData(req);
  
  res.render("host/regHomePost.ejs", {
    houseName,
    price,
    phoneNo,
    address,
    image,
    description,
    title: "Registered-Home",
    link: "/css/regHomePost.css",
  })

}}
  catch (err){
    console.log("their is some issue");
  }
}
