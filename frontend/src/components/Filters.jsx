import React, { useState } from "react";

const Filters = ({ onFilter }) => {
  const [category, setCategory] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  const handleApply = () => {
    onFilter({ category, startDate, endDate });
  };

  const handleClear = () => {
    setCategory("");
    setStartDate("");
    setEndDate("");
    onFilter({});
  };

  return (
    <div className="bg-white dark:bg-gray-800 p-6 shadow-lg rounded-lg mb-6 flex flex-col md:flex-row md:items-center gap-4">
      <select
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        className="p-3 border dark:border-gray-600 rounded-lg w-full md:w-48 bg-gray-50 dark:bg-gray-700 text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
      >
        <option value="">All Categories</option>
        <option value="Food">Food</option>
        <option value="Transport">Transport</option>
        <option value="Shopping">Shopping</option>
        <option value="Health">Health</option>
        <option value="Entertainment">Entertainment</option>
        <option value="Misc">Misc</option>
      </select>

      <input
        type="date"
        value={startDate}
        onChange={(e) => setStartDate(e.target.value)}
        className="p-3 border dark:border-gray-600 rounded-lg w-full md:w-40 bg-gray-50 dark:bg-gray-700 text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
      />
      <input
        type="date"
        value={endDate}
        onChange={(e) => setEndDate(e.target.value)}
        className="p-3 border dark:border-gray-600 rounded-lg w-full md:w-40 bg-gray-50 dark:bg-gray-700 text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
      />

      <div className="flex gap-3 mt-2 md:mt-0">
        <button
          onClick={handleApply}
          className="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700 transition-all duration-300"
        >
          Apply
        </button>
        <button
          onClick={handleClear}
          className="bg-gray-300 dark:bg-gray-600 text-gray-800 dark:text-white px-5 py-2 rounded-lg hover:bg-gray-400 dark:hover:bg-gray-500 transition-all duration-300"
        >
          Clear
        </button>
      </div>
    </div>
  );
};

export default Filters;
