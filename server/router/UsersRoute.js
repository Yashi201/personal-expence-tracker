const express = require('express');
const router = express.Router(); 

// import all user contoller
const { addNewUser, loginUser, logOutUser,getUserAllData } = require("../controllers/UserController");
const { isUserLogedIn } = require('../middelware/Authentication');



// add new user
router.route('/signup').post(addNewUser);
// login user route
router.route('/login').post(loginUser);
// logut user route
router.route('/logout').get(logOutUser);
// if user is login then 
router.route('/userprofile').get(isUserLogedIn, getUserAllData);



module.exports = router