const express = require("express");
const {
  getHomepage,
  getABC,
  getHoiDanIT,
  getCreatePage,
  postCreateUser,
  getUpdatePage,
} = require("../controllers/homeController");
const router = express.Router();
// router.METHOD("/route", handler)
router.get("/", getHomepage);
router.get("/abc", getABC);
router.get("/hoidanit", getHoiDanIT);
router.get("/create", getCreatePage);
router.get("/update", getUpdatePage);
router.post("/create-user", postCreateUser);
module.exports = router; //export default
