const express = require("express");
const Transaction = require("../models/Transaction");
const auth = require("../middleware/auth");

const router = express.Router();

// Create
router.post("/", auth, async (req, res) => {
  const txn = new Transaction({ ...req.body, userId: req.userId });
  await txn.save();
  res.status(201).json(txn);
});

// Read
router.get("/", auth, async (req, res) => {
  const txns = await Transaction.find({ userId: req.userId }).sort({ date: -1 });
  res.json(txns);
});

// Update
router.put("/:id", auth, async (req, res) => {
  const txn = await Transaction.findOneAndUpdate(
    { _id: req.params.id, userId: req.userId },
    req.body,
    { new: true }
  );
  res.json(txn);
});

// Delete
router.delete("/:id", auth, async (req, res) => {
  await Transaction.findOneAndDelete({ _id: req.params.id, userId: req.userId });
  res.sendStatus(204);
});

module.exports = router;
