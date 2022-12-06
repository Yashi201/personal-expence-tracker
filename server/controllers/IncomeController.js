const BigPromise = require("../middelware/BigPromise");
const IncomeModel = require("../models/IncomeModel");

// add new income
exports.addNewIncome = BigPromise(async (req, res, next) => {
  req.body.recorded_by = req.user.id;
  // const { amount, description, category, addedOn, isDeleted, } = req.body;

  const addincome = new IncomeModel(req.body);

  await addincome.save()
  return res.status(200).json({
    success: true,
    massage: "add record",
    addincome
  })
   

  
});

// get all income
exports.getAllIncome = BigPromise(async (req, res, next) => {
  //  get all income of a user
  const userId = req.user.id;
  const NumberOfIncome = await IncomeModel.find({recorded_by: userId});
  res.status(200).json({
    sucess:true,
    massage: " all user income",
    NumberOfIncome,
  })
});

// delet any one income
exports.deletIncome = BigPromise(async (req, res, next) => {});
