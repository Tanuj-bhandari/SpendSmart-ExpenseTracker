import React, { useEffect, useState } from "react";
import axios from "axios";
import TransactionForm from "../components/TransactionForm";
import TransactionList from "../components/TransactionList";
import Summary from "../components/Summary";
import Filters from "../components/Filters";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const [transactions, setTransactions] = useState([]);
  const [filteredTxns, setFilteredTxns] = useState([]);
  const [editTxn, setEditTxn] = useState(null);
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  const fetchTransactions = async () => {
    try {
      const res = await axios.get("https://spendsmart-expensetracker.onrender.com/api/transactions", {
        headers: { Authorization: `Bearer ${token}` },
      });
      setTransactions(res.data);
      setFilteredTxns(res.data);
    } catch (err) {
      console.error(err);
      if (err.response?.status === 401) {
        localStorage.removeItem("token");
        navigate("/login");
      }
    }
  };

  useEffect(() => {
    fetchTransactions();
  }, []);

  const handleFilter = ({ category, startDate, endDate }) => {
    let result = [...transactions];

    if (category) {
      result = result.filter((txn) => txn.category === category);
    }

    if (startDate) {
      result = result.filter((txn) => new Date(txn.date) >= new Date(startDate));
    }

    if (endDate) {
      result = result.filter((txn) => new Date(txn.date) <= new Date(endDate));
    }

    setFilteredTxns(result);
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-gray-200 via-gray-300 to-gray-400 dark:from-gray-900 dark:via-gray-800 dark:to-gray-700 p-6 flex flex-col items-center justify-center">
      <div className="max-w-6xl w-full bg-white dark:bg-gray-800 bg-opacity-90 backdrop-blur-md rounded-lg shadow-lg p-8">
        <Filters onFilter={handleFilter} />

        <Summary transactions={filteredTxns} />

        <div className="flex flex-wrap gap-6 mt-6 justify-center">
          <div className="bg-gray-50 dark:bg-gray-700 rounded-lg shadow-sm p-6 w-full md:w-1/2 hover:shadow-md transition duration-300">
            <TransactionForm
              fetchTransactions={fetchTransactions}
              editTxn={editTxn}
              setEditTxn={setEditTxn}
            />
          </div>
          <div className="bg-gray-50 dark:bg-gray-700 rounded-lg shadow-sm p-6 w-full md:w-1/2 hover:shadow-md transition duration-300">
            <TransactionList
              transactions={filteredTxns}
              fetchTransactions={fetchTransactions}
              setEditTxn={setEditTxn}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
