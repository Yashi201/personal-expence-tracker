const BigPromise = require("../middelware/BigPromise");
const UserModel = require("../models/UserModel");
const CookieToken = require("../utility/CookieToken");

// add new user

exports.addNewUser = BigPromise(async (req, res, next) => {
  // const UserModelObject
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    return next(new Error("plz fill all field"));
  }
  const newUser = await UserModel.create({ name, email, password });

  CookieToken(newUser, res);
});

// login user

exports.loginUser = BigPromise(async (req, res, next) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return next(new Error("plz fill all field"));
  }

  const finduser = await UserModel.findOne({ email }).select("+password");

  if (!finduser) {
    return next(new Error("Plz Enter Login"));
  }

  const isCorrectPassword = await finduser.isValidatePassowrd(password);
  if (!isCorrectPassword) {
    return next(new Error("Plz Enter Write Email, Password"));
  }

  CookieToken(finduser, res);
});

// get user profile data income, expence data from database
exports.getUserAllData = BigPromise(async (req, res, next) => {

  const user = await UserModel.findById(req.user.id);
  // console.log(user);
  res.status(200).json({
    success: true,
    massage: " user and loged in",
    user
  });
});

// logut route
exports.logOutUser = BigPromise(async (req, res, next) => {

  res.cookie('token', null, {
    expires: new Date(Date.now()),
    httpOnly: true,
  });
  res.status(200).json({
    success: true,
    msg: "user logut",
  });
});
