const mongoose = require("mongoose");

const ExpensesModel = new mongoose.Schema({
  amount: { type: Number, default: 0 },
  description: { type: String, default: "" },
  recorded_by: { type: mongoose.Schema.ObjectId, ref: "User" },
  category: {
    type: String,
    trim: true,
    required: "Category is required",
  },
  isDeleted: { type: Boolean, default: false },
  addedOn: { type: Number, default: Date.now() },
  modifiedOn: { type: Number, default: Date.now() },
});

module.exports = mongoose.model("Expensesmodel", ExpensesModel);
