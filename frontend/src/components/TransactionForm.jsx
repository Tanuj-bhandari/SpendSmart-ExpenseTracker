import React, { useState, useEffect } from "react";
import axios from "axios";

const TransactionForm = ({ fetchTransactions, editTxn, setEditTxn }) => {
  const [form, setForm] = useState({
    amount: "",
    type: "Income",
    description: "",
    category: "Misc",
    date: "",
  });

  const token = localStorage.getItem("token");

  useEffect(() => {
    if (editTxn) {
      setForm({
        amount: Math.abs(editTxn.amount),
        type: editTxn.amount > 0 ? "Income" : "Expense",
        description: editTxn.description,
        category: editTxn.category,
        date: editTxn.date.slice(0, 10),
      });
    }
  }, [editTxn]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!form.amount || Number(form.amount) === 0) {
      alert("Amount must be non-zero");
      return;
    }
    if (!form.date || !form.description.trim()) {
      alert("All fields are required");
      return;
    }

    const payload = {
      ...form,
      amount: form.type === "Expense" ? -Math.abs(form.amount) : Math.abs(form.amount),
    };

    try {
      if (editTxn) {
        await axios.put(
          `${process.env.REACT_APP_API_URL}/api/transactions/${editTxn._id}`,
          payload,
          { headers: { Authorization: `Bearer ${token}` } }
        );
      } else {
        await axios.post(`${process.env.REACT_APP_API_URL}/api/transactions`, payload, {
          headers: { Authorization: `Bearer ${token}` },
        });
      }
      setForm({
        amount: "",
        type: "Income",
        description: "",
        category: "Misc",
        date: "",
      });
      setEditTxn(null);
      fetchTransactions();
    } catch (err) {
      alert("Failed to submit transaction");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white dark:bg-gray-800 p-6 shadow-lg rounded-xl space-y-4"
    >
      <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-100">
        {editTxn ? "Edit" : "Add"} Transaction
      </h2>

      <label className="block text-gray-600 dark:text-gray-300">Type</label>
      <select
        value={form.type}
        onChange={(e) => setForm({ ...form, type: e.target.value })}
        className="w-full p-3 border dark:border-gray-600 rounded-lg bg-gray-50 dark:bg-gray-700 focus:ring-2 focus:ring-blue-500 transition"
      >
        <option>Income</option>
        <option>Expense</option>
      </select>

      <label className="block text-gray-600 dark:text-gray-300">Amount</label>
      <input
        type="number"
        placeholder="Enter amount"
        value={form.amount}
        onChange={(e) => setForm({ ...form, amount: e.target.value })}
        className="w-full p-3 border dark:border-gray-600 rounded-lg bg-gray-50 dark:bg-gray-700 focus:ring-2 focus:ring-blue-500 transition"
        required
      />

      <label className="block text-gray-600 dark:text-gray-300">Description</label>
      <input
        type="text"
        placeholder="Brief description"
        value={form.description}
        onChange={(e) => setForm({ ...form, description: e.target.value })}
        className="w-full p-3 border dark:border-gray-600 rounded-lg bg-gray-50 dark:bg-gray-700 focus:ring-2 focus:ring-blue-500 transition"
        required
      />

      <label className="block text-gray-600 dark:text-gray-300">Date</label>
      <input
        type="date"
        value={form.date}
        onChange={(e) => setForm({ ...form, date: e.target.value })}
        className="w-full p-3 border dark:border-gray-600 rounded-lg bg-gray-50 dark:bg-gray-700 focus:ring-2 focus:ring-blue-500 transition"
        required
      />

      <label className="block text-gray-600 dark:text-gray-300">Category</label>
      <select
        value={form.category}
        onChange={(e) => setForm({ ...form, category: e.target.value })}
        className="w-full p-3 border dark:border-gray-600 rounded-lg bg-gray-50 dark:bg-gray-700 focus:ring-2 focus:ring-blue-500 transition"
      >
        <option value="Food">Food</option>
        <option value="Transport">Transport</option>
        <option value="Shopping">Shopping</option>
        <option value="Health">Health</option>
        <option value="Entertainment">Entertainment</option>
        <option value="Misc">Misc</option>
      </select>

      <button className="w-full bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700 transition-all duration-300">
        {editTxn ? "Update" : "Add"}
      </button>
    </form>
  );
};

export default TransactionForm;
