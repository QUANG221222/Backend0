const express = require("express");
const {
  getHomepage,
  getABC,
  getHoiDanIT,
  getCreateUser,
  postCreateUser,
} = require("../controllers/homeController");
const router = express.Router();
// router.METHOD("/route", handler)
router.get("/", getHomepage);
router.get("/abc", getABC);
router.get("/hoidanit", getHoiDanIT);
router.get("/create", getCreateUser);
router.post("/create-user", postCreateUser);
module.exports = router; //export default
