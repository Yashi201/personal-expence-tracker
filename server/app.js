require("dotenv").config();
require("./config/connectdb").connect();
const express = require("express");
const cookieParser = require('cookie-parser');
const app = express();
const cors = require('cors')


app.use(cors())
app.use(cookieParser());
app.use(express.json());

const addUser = require("./router/UsersRoute");
const loginUser = require("./router/UsersRoute");
const logOutUser = require("./router/UsersRoute");
// add income router
const addNewIncome = require("./router/IncomeRoute");
const getAllIncome = require("./router/IncomeRoute");

// add expences
const addNewExpense = require("./router/ExpencesRoute")
const getAllExpenses = require("./router/ExpencesRoute")
const deletExpense = require("./router/ExpencesRoute")

const totalAmount = require("./router/FreatureRoute");



//// // router middelware
app.use("/api/", addUser);
app.use("/api/", loginUser);
app.use("/api/", logOutUser);

// add income source
app.use("/api/", addNewIncome);
app.use("/api/", getAllIncome);

// add expences source
app.use("/api/", addNewExpense);
app.use("/api/", getAllExpenses);
app.use("/api/",deletExpense)

// feture route
app.use("/api/", totalAmount)



// export app js
module.exports = app;
