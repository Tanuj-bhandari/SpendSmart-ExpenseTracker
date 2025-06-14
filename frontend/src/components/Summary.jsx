import PieChart from "./PieChart";

const Summary = ({ transactions }) => {
  const income = transactions
    .filter((t) => t.amount > 0)
    .reduce((acc, t) => acc + Number(t.amount), 0);

  const expenses = transactions
    .filter((t) => t.amount < 0)
    .reduce((acc, t) => acc + Number(t.amount), 0);

  const balance = income + expenses;

  return (
    <div className="bg-white dark:bg-gray-800 p-6 shadow-lg rounded-xl grid md:grid-cols-2 gap-6">
      <div className="space-y-3">
        <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100">Summary</h2>
        <p className="text-lg">
          💰 Income: <span className="text-green-500 font-semibold">₹{income}</span>
        </p>
        <p className="text-lg">
          🧾 Expenses: <span className="text-red-500 font-semibold">₹{Math.abs(expenses)}</span>
        </p>
        <p className="text-lg">
          🧮 Balance: <span className="text-blue-500 font-semibold">₹{balance}</span>
        </p>
      </div>
      <div className="flex items-center justify-center p-4 bg-gray-50 dark:bg-gray-700 rounded-lg shadow">
        <PieChart transactions={transactions} />
      </div>
    </div>
  );
};

export default Summary;