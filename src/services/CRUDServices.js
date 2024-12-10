const connection = require("../config/database");
const getAllUsers = async () => {
  let [results, fields] = await connection.query("select * from Users");
  return results;
};

const getUserById = async (userId) => {
  let [result, fields] = await connection.query(
    "select * from Users where id = ?",
    [userId]
  );
  let user = result && result.length > 0 ? result[0] : {};
  return user;
};
module.exports = {
  getAllUsers,
  getUserById,
};
