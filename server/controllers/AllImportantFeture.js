const BigPromise = require("../middelware/BigPromise");
const ExpenceModel = require("../models/ExpenceModel");
const IncomeModel = require("../models/IncomeModel");


exports.totalAmount = BigPromise(async(req, res, next) =>{
    // get all income of user 
    const userId = req.user.id;
    // const ammountget;
    // get total income ammount of user
    const NumberOfIncome = await IncomeModel.find({recorded_by: userId}).countDocuments();
    const totalIncome = await IncomeModel.find({recorded_by: userId})
    console.log(NumberOfIncome)
    console.log(totalIncome);
    // get all expences of user
    const NumberOfExpence = await ExpenceModel.find({ recorded_by: userId }).countDocuments();
    // calcutae total expences amount
    console.log(NumberOfExpence)




})