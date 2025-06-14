const mongoose = require("mongoose");

const transactionSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  amount: Number,
  description: String,
  date: Date,
  category: String,
});

module.exports = mongoose.model("Transaction", transactionSchema);
