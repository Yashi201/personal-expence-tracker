const mongoose = require("mongoose");
const validator = require("validator");
const bycrypt = require("bcrypt");
const jesonwebtoken = require("jsonwebtoken");

const UserModel = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "plz field required"],
  },
  email: {
    type: String,
    validate: [validator.isEmail, "Plz Enter Email"],
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  token: {
    type: String,
  },
});

// encyt password

UserModel.pre("save", async function (next) {
  if (!this.isModified("password")) {
    return next();
  }
  this.password = await bycrypt.hash(this.password, 10);
});

UserModel.methods.isValidatePassowrd = async function (usersendpassword) {
  return await bycrypt.compare(usersendpassword, this.password);
};

// create and return jwt token\
UserModel.methods.getJwtToken =  function () {
  return jesonwebtoken.sign({ id: this._id }, process.env.JWT_TOKEN, {
    expiresIn: process.env.JWT_EXPIRE
  });
};

module.exports = mongoose.model("user", UserModel);
