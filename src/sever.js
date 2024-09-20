const express = require("express"); //common js
const path = require("path");
require("dotenv").config();
console.log(">>> check env: ", process.env);
// import express from "express"; error //es modules
const app = express(); //app express
const port = process.env.PORT || 8888; //port => hardcore .uta .prod
const hostname = process.env.HOST_NAME;
//config template engine
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
//Khai báo route
app.get("/", (req, res) => {
  res.send("Hello World! YenQuang  & Nodemon");
});
app.get("/abc", (req, res) => {
  res.send("Check ABC");
});
app.get("/hoidanit", (req, res) => {
  // res.send("<h1> Nguyen Nhat Quang </h1>");
  res.render("sample.ejs");
});

app.listen(port, hostname, () => {
  console.log(`Example app listening on port ${port}`);
});
