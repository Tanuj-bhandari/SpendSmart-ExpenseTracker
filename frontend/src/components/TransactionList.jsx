import React from "react";
import axios from "axios";

const TransactionList = ({ transactions, fetchTransactions, setEditTxn }) => {
  const token = localStorage.getItem("token");

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this transaction?")) {
      try {
        await axios.delete(`https://spendsmart-expensetracker.onrender.com/api/transactions/${id}`, {
          headers: { Authorization: `Bearer ${token}` },
        });
        fetchTransactions();
      } catch (err) {
        alert("Delete failed");
      }
    }
  };

  return (
    <div className="bg-white dark:bg-gray-800 p-6 shadow-lg rounded-xl">
      <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-100 mb-4">
        Transactions
      </h2>
      {transactions.length === 0 ? (
        <p className="text-gray-500 dark:text-gray-300">No transactions yet.</p>
      ) : (
        <ul className="space-y-4 max-h-[400px] overflow-y-auto scrollbar-thin scrollbar-thumb-gray-500 dark:scrollbar-thumb-gray-700">
          {transactions.map((txn) => (
            <li
              key={txn._id}
              className="flex justify-between items-center bg-gray-50 dark:bg-gray-700 p-4 rounded-lg shadow transition-all duration-300 hover:scale-105"
            >
              <div>
                <p className="font-medium text-gray-700 dark:text-gray-100">
                  {txn.description} - ₹{txn.amount}
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {txn.category} • {txn.date.slice(0, 10)}
                </p>
              </div>
              <div className="space-x-3">
                <button
                  className="text-blue-500 dark:text-blue-400 hover:underline transition"
                  onClick={() => setEditTxn(txn)}
                >
                  Edit
                </button>
                <button
                  className="text-red-500 dark:text-red-400 hover:underline transition"
                  onClick={() => handleDelete(txn._id)}
                >
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default TransactionList;
