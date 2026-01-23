const home = require("../model/home");

const homeHostGet = async (req, res, next) => {
  const result = await home.find();
  return res.render("host/homeHost.ejs", {
    link: "/css/homeHost.css",
    title: "Host home",
    houses: result,
    role: req.user.role,
  });
};
const homeHostPost = async (req, res, next) => {
    if (req.body.action==="delete"){
      await home.findByIdAndDelete(req.body.id);
      
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
  }}
};

// Home Edit

const homeEdit = async (req, res, next) => {
  const id = req.params.id;
  const house = await home.findById(id);

  return res.render("host/homeEdit.ejs", {
    link: "/css/homeEdit.css",
    title: "Edit Home",
    house,
    role: req.user.role,
  });
};

module.exports = { homeHostGet, homeHostPost, homeEdit };
