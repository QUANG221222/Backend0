const express = require("express");
const {
  getHomepage,
  getABC,
  getHoiDanIT,
} = require("../controllers/homeController");
const router = express.Router();
// router.METHOD("/route", handler)
router.get("/", getHomepage);
router.get("/abc", getABC);
router.get("/hoidanit", getHoiDanIT);
module.exports = router; //export default
