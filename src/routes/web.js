const express = require("express");
const router = express.Router();
router.get("/", (req, res) => {
  res.send("Hello World! YenQuang  & Nodemon");
});
router.get("/abc", (req, res) => {
  res.send("Check ABC");
});
router.get("/hoidanit", (req, res) => {
  // res.send("<h1> Nguyen Nhat Quang </h1>");
  res.render("sample.ejs");
});
module.exports = router; //export default
