require("dotenv").config();
const express = require("express"); //common js
const configViewEngine = require("./config/viewEngine");
const webRouter = require("./routes/web");
const { getHomepage } = require("./controllers/homeController");
const app = express(); //app express
const port = process.env.PORT || 8888; //port => hardcore .uta .prod
const hostname = process.env.HOST_NAME;

//config template engine
configViewEngine(app);
//Khai báo route
// app.use("/v1", webRouter);
app.use(webRouter);

app.listen(port, hostname, () => {
  console.log(`Example app listening on port ${port}`);
});
