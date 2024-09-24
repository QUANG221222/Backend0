const connection = require("../config/database");
const getHomepage = (req, res) => {
  return res.render("home.ejs");
};
const getABC = (req, res) => {
  res.send("Check ABC");
};
const getHoiDanIT = (req, res) => {
  res.render("sample.ejs");
};
const postCreateUser = (req, res) => {
  let email = req.body.email;
  let name = req.body.name;
  let city = req.body.city;
  console.log(">>> email: ", email, "name: ", name, "city: ", city);
  // let {email, name, city} = req.body;

  connection.query(
    ` INSERT INTO Users (email, name, city)
      Values
      (?, ?, ?);`,
    [email, name, city],
    function (err, results, fields) {
      console.log(results);
      res.send("Created user succeed");
    }
  );
};
module.exports = {
  getHomepage,
  getABC,
  getHoiDanIT,
  postCreateUser,
};
