const connection = require("../config/database");
const { getAllUsers } = require("../services/CRUDServices");
const getHomepage = async (req, res) => {
  // console.log(">>> check result: ", results);
  let results = await getAllUsers();
  return res.render("home.ejs", { listUsers: results });
};
const getABC = (req, res) => {
  res.send("Check ABC");
};
const getHoiDanIT = (req, res) => {
  res.render("sample.ejs");
};
const getCreatePage = (req, res) => {
  res.render("create.ejs");
};
const postCreateUser = async (req, res) => {
  let email = req.body.email;
  let name = req.body.name;
  let city = req.body.city;
  console.log(">>> email: ", email, "name: ", name, "city: ", city);
  // let {email, name, city} = req.body;

  // connection.query(
  //   ` INSERT INTO Users (email, name, city)
  //     Values
  //     (?, ?, ?);`,
  //   [email, name, city],
  //   function (err, results, fields) {
  //     console.log(results);
  //     res.send("Created user succeed");
  //   }
  // );
  let [results, fields] = await connection.query(
    ` INSERT INTO Users (email, name, city)
      Values (?, ?, ?);`,
    [email, name, city]
  );
  console.log(">>> check results: ", results);
  res.send("Created user succeed");
};

const getUpdatePage = (req, res) => {
  const userId = req.params.id;
  console.log(">>> req.params", req.params);
  res.render("edit.ejs");
};
module.exports = {
  getHomepage,
  getABC,
  getHoiDanIT,
  getCreatePage,
  postCreateUser,
  getUpdatePage,
};
