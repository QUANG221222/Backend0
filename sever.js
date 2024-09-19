const express = require("express"); //common js
// import express from "express"; error //es modules
const app = express(); //app express
const port = 8080; //port

//Khai báo route
app.get("/", (req, res) => {
  res.send("Hello World!");
});
app.get("/abc", (req, res) => {
  res.send("Check ABC");
});
app.get("/hoidanit", (req, res) => {
  res.send("<h1> Nguyen Nhat Quang </h1>");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
