require("dotenv").config();
const express = require("express"); //common js
const configViewEngine = require("./config/viewEngine");
const webRouter = require("./routes/web");
const { getHomepage } = require("./controllers/homeController");
const app = express(); //app express
const port = process.env.PORT || 8888; //port => hardcore .uta .prod
const hostname = process.env.HOST_NAME;
const mysql = require("mysql2");
//config template engine
configViewEngine(app);
//Khai báo route
// app.use("/v1", webRouter);
app.use(webRouter);

//test connection
// Create the connection to database
const connection = mysql.createConnection({
  host: "localhost",
  port: 3307, //default : 3306
  user: "root", //default: empty
  password: "123456",
  database: "hoidanit",
});
// A simple SELECT query
connection.query("SELECT * FROM Users", function (err, results, fields) {
  console.log(">>> results =", results); // results contains rows returned by server
  console.log(">>> fields=", fields); // fields contains extra meta data about results, if available
});
app.listen(port, hostname, () => {
  console.log(`Example app listening on port ${port}`);
});
