const UserModel = require("../models/UserModel");
const BigPromise = require("./BigPromise");
const jwtToken = require("jsonwebtoken");

exports.isUserLogedIn = BigPromise(async (req, res, next) => {
  const token =
    req.cookies.token || req.header("Authorization").replace("Bearer ", "");
  if (!token) {
    return next(new Error("plz login first"));
  }
  const decode = jwtToken.verify(token, process.env.JWT_TOKEN);

  req.user = await UserModel.findById(decode.id);
  console.log(req.user);
  next();
});
