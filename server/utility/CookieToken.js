// const UserModel = require("../models/UserModel");


const CookieToken = (users, res) => {
  const token = users.getJwtToken();
  const option = {
    expire: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000),
    httpOnly: true,
  };
  res.status(200).cookie('token', token, option).json({
    success: true,
    users,
    token
  });
};

module.exports = CookieToken;
