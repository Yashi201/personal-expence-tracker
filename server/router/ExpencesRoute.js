const express = require('express');
const router = express.Router(); 



const { addNewExpense, getAllExpenses, deletExpense } = require("../controllers/ExpencesController")
const { isUserLogedIn } = require('../middelware/Authentication');


router.route('/expences').post(isUserLogedIn, addNewExpense);
// login user route
router.route('/expences').get(isUserLogedIn, getAllExpenses);

router.route('/expences').delete(isUserLogedIn, deletExpense);


module.exports = router