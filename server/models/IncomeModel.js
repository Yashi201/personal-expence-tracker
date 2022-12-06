const mongoose = require("mongoose");

const IncomeModel = new mongoose.Schema({
  amount: { type: Number, default: 0 },
  description: { type: String, default: "" },
  category: {
    type: String,
    trim: true,
    required: "Category is required",
  },
  recorded_by: { type: mongoose.Schema.ObjectId, ref: "User" },
  isDeleted: { type: Boolean, default: false },
  addedOn: { type: Number, default: Date.now() },
  modifiedOn: { type: Number, default: Date.now() },
});

module.exports = mongoose.model("income", IncomeModel);
