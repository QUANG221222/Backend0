const express = require("express");
const {
  getHomepage,
  getABC,
  getHoiDanIT,
  postCreateUser,
  getCreatePage,
} = require("../controllers/homeController");
const router = express.Router();
// router.METHOD("/route", handler)
router.get("/", getHomepage);
router.get("/abc", getABC);
router.get("/hoidanit", getHoiDanIT);
router.get("/create", getCreatePage);
router.post("/create-user", postCreateUser);
module.exports = router; //export default
