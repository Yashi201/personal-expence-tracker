const express = require('express');
const router = express.Router(); 




const { isUserLogedIn } = require('../middelware/Authentication');
const {totalAmount } = require('../controllers/AllImportantFeture')

router.route('/ammount').get(isUserLogedIn,totalAmount );
// login user route



module.exports = router