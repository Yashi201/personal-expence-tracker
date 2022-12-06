const express = require('express');
const router = express.Router(); 



const { addNewIncome, getAllIncome } = require("../controllers/IncomeController");
const { isUserLogedIn } = require('../middelware/Authentication');


router.route('/income').post(isUserLogedIn, addNewIncome);
// login user route
router.route('/income/').get(isUserLogedIn, getAllIncome);



module.exports = router