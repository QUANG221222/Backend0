const getHomepage = (req, res) => {
  res.send("Hello World! YenQuang  & Nodemon");
};
const getABC = (req, res) => {
  // process data
  //call model
  res.send("Check ABC");
};
const getHoiDanIT = (req, res) => {
  res.render("sample.ejs");
};
module.exports = {
  getHomepage,
  getABC,
  getHoiDanIT,
};
