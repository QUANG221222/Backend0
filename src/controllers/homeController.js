const connection = require("../config/database");
const {
  getAllUsers,
  getUserById,
  updateUserById,
  deleteUserById,
} = require("../services/CRUDServices");
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
const postUpdateUser = async (req, res) => {
  let userId = req.body.userId;
  let email = req.body.email;
  let name = req.body.name;
  let city = req.body.city;
  await updateUserById(email, name, city, userId);
  // res.send("Update user succeed");
  res.redirect("/");
};

const getUpdatePage = async (req, res) => {
  const userId = req.params.id;
  let user = await getUserById(userId);
  res.render("edit.ejs", { userEdit: user });
};

const postDeleteUser = async (req, res) => {
  const userId = req.params.id;
  let user = await getUserById(userId);
  res.render("delete.ejs", { userEdit: user });
};

const postHandleRemoveUser = async (req, res) => {
  let userId = req.body.userId;
  await deleteUserById(userId);
  res.redirect("/");
};
module.exports = {
  getHomepage,
  getABC,
  getHoiDanIT,
  getCreatePage,
  postCreateUser,
  getUpdatePage,
  postUpdateUser,
  postDeleteUser,
  postHandleRemoveUser,
};
