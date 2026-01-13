const homes = require("../model/home");

const homeHostGet = async (req, res, next) => {
  const result = await homes.find();
  res.render("host/homeHost.ejs", {
    link: "css/home.css",
    title: "Host home",
    houses: result,
  });
};
const homeHostPost = async (req, res, next) => {
    if (req.body.action==="delete"){
      await homes.findByIdAndDelete(req.body.id);
      res.redirect("/host");
    }
    else{
  try {
    const result = await homes.findByIdAndUpdate(req.body.id, {
      houseName: req.body.houseName,
      price: req.body.price,
      phoneNo: req.body.phoneNo,
      address: req.body.address,
      image: req.body.image,
      description: req.body.description,
    });
    res.redirect("/host");
  } catch (err) {
    console.log(err);
  }}
};

const homeEdit = async (req, res, next) => {
  const id = req.params.id;
  const house = await homes.findById(id);

  res.render("./host/homeEdit.ejs", {
    link: "/css/homeEdit.css",
    title: "Edit Home",
    house,
  });
};

module.exports = { homeHostGet, homeHostPost, homeEdit };
