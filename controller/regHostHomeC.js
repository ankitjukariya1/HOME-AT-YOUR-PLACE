const home = require("../model/home");

const regHostHomeGet = async (req, res, next) => {
  const result = await home.find({userId:req.user.id});
  return res.render("host/regHostHome.ejs", {
    link: "/css/regHostHome.css",
    title: "Host home",
    houses: result,
    role: req.user.role,
  });
};
const regHostHomePost = async (req, res, next) => {
    if (req.body.action==="delete"){
      try{
      await home.findByIdAndDelete(req.body.id);}
      catch (err) {
    console.log(err);
    return res.redirect('/error');
    
  }
      
      return res.redirect("/host")
    }
    else{
  try {
    const result = await home.findByIdAndUpdate(req.body.id, {
      houseName: req.body.houseName,
      price: req.body.price,
      contactNo: req.body.contactNo,
      address: req.body.address,
      image: req.body.image,
      description: req.body.description,
    });
    return res.redirect("/host");
  } catch (err) {
    console.log(err);
    return res.redirect('/error')
    
  }}
};

// Home Edit

const homeEdit = async (req, res, next) => {
  
  const id = req.params.id;
  const userIdHome = (await home.findById(id)).userId
  if (req.user.id!=userIdHome){
    return res.redirect(`/home-details/${id}`)
  }
  
  let house =null;
   try{house = await home.findById(id);}
  catch (err) {
    console.log(err);
    return res.redirect('/error')
    
  }

  return res.render("host/homeEdit.ejs", {
    link: "/css/homeEdit.css",
    title: "Edit Home",
    house,
    role: req.user.role,
  });
};

module.exports = { regHostHomeGet, regHostHomePost, homeEdit };
