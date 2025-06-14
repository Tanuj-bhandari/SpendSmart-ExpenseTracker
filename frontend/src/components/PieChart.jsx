import { Pie } from "react-chartjs-2";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

const PieChart = ({ transactions }) => {
  const incomeMap = {};
  const expenseMap = {};

  transactions.forEach((t) => {
    const cat = t.category || "Misc";
    if (t.amount > 0) {
      incomeMap[cat] = (incomeMap[cat] || 0) + t.amount;
    } else {
      expenseMap[cat] = (expenseMap[cat] || 0) + Math.abs(t.amount);
    }
  });

  const incomeColors = [
    "#34d399", "#10b981", "#06b6d4", "#0ea5e9", "#14b8a6", "#22d3ee"
  ];
  const expenseColors = [
    "#ef4444", "#f97316", "#facc15", "#e11d48", "#c084fc", "#f472b6"
  ];

  const data = {
    labels: [...Object.keys(incomeMap), ...Object.keys(expenseMap)],
    datasets: [
      {
        label: "Income & Expense by Category",
        data: [...Object.values(incomeMap), ...Object.values(expenseMap)],
        backgroundColor: [
          ...incomeColors.slice(0, Object.keys(incomeMap).length),
          ...expenseColors.slice(0, Object.keys(expenseMap).length),
        ],
        borderWidth: 2,
        hoverOffset: 10,
        hoverBorderWidth: 3,
      },
    ],
  };

  const totalItems = data.datasets[0].data.reduce((sum, val) => sum + val, 0);

  return (
    <div className="max-w-md mx-auto p-8 bg-gray-900 shadow-xl rounded-lg font-inter">
      {totalItems > 0 ? (
        <div className="h-72">
          <Pie
            data={data}
            options={{
              responsive: true,
              maintainAspectRatio: false,
              plugins: {
                legend: {
                  position: "bottom",
                  labels: {
                    color: "#fff", // WHITE text for dark background
                    font: { size: 14, family: "Inter" },
                  },
                },
                tooltip: {
                  backgroundColor: "#222",
                  titleColor: "#fff",
                  bodyColor: "#ddd",
                  bodyFont: { size: 14, family: "Inter" },
                },
              },
            }}
          />
        </div>
      ) : (
        <p className="text-lg font-semibold text-white text-center mt-10">
          No transactions to show
        </p>
      )}
    </div>
  );
};

export default PieChart;
