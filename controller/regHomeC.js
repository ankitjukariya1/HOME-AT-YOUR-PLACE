let homeModel = require("./../model/home");

exports.regHomeGet = (req, res, next) => {
  res.render("host/regHomeGet.ejs", {
    title: "Register",
    link: "css/regHomeGet.css",
  });
};

exports.regHomePost = async (req, res, next) => {
  //const {houseName, price, phoneNo, address, image} = req.body;  since now we need to pass whole object directly in schema we dont need to destructure this req.body send us object which we can send diretly
  try {
  let house = new homeModel (req.body); // constructor
    console.log(req.body);
    await house.save();
    console.log("i am  below here");
  const { houseName, price, phoneNo, address, image, description } = req.body;
  res.render("host/regHomePost.ejs", {
    houseName,
    price,
    phoneNo,
    address,
    image,
    description,
    title: "Registered-Home",
    link: "/css/regHomePost.css",
  });}
  catch (err){
   // console.log(err);
    console.log("their is some issue");
  }
};
