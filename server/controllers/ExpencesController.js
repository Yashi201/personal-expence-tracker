const BigPromise = require("../middelware/BigPromise");
const ExpenceModel = require("../models/ExpenceModel");

// add new expences
exports.addNewExpense = BigPromise(async (req, res, next) => {
  req.body.recorded_by = req.user.id;

  //   ExpenceModel
  const addExpence = new ExpenceModel(req.body);

  await addExpence.save();
  return res.status(200).json({
    success: true,
    massage: "add record",
    addExpence,
  });
});
// get all Expences
exports.getAllExpenses = BigPromise(async (req, res, next) => {
  const userId = req.user.id;
  const NumberOfExpence = await ExpenceModel.find({ recorded_by: userId });
  res.status(200).json({
    sucess: true,
    massage: " all user income",
    NumberOfExpence,
  });
});

// delet one expences
exports.deletExpense = BigPromise(async (req, res, next) => {});
