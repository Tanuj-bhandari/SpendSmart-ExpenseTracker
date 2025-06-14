import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div
      className="min-h-screen flex items-center justify-center px-4 bg-cover bg-center dark:bg-gray-900"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1586078062337-60cc6c6842fe?auto=format&fit=crop&w=1600&q=80')",
      }}
    >
      <div className="bg-white dark:bg-gray-800 bg-opacity-80 max-w-4xl w-full p-10 rounded-xl shadow-xl flex flex-col md:flex-row items-center justify-between transition-transform hover:scale-105">
        <div className="md:w-1/2 text-center md:text-left">
          <h1 className="text-4xl font-bold text-blue-700 dark:text-blue-400 mb-4">
            Take Control of Your Finances
          </h1>
          <p className="text-gray-800 dark:text-gray-300 mb-6">
            Easily track expenses, monitor spending habits, and manage your budget with ExpenseTracker.
          </p>
          <div className="space-x-4 flex justify-center md:justify-start">
            <Link
              to="/register"
              className="bg-blue-700 hover:bg-blue-800 dark:bg-blue-500 dark:hover:bg-blue-600 text-white px-5 py-2 rounded-lg transition"
            >
              Get Started
            </Link>
            <Link
              to="/login"
              className="border border-blue-700 dark:border-blue-400 text-blue-700 dark:text-blue-400 px-5 py-2 rounded-lg hover:bg-blue-50 dark:hover:bg-gray-700 transition"
            >
              Login
            </Link>
          </div>
        </div>
        <div className="hidden md:block md:w-1/2">
          <img
            src="https://cdn-icons-png.flaticon.com/512/2929/2929267.png"
            alt="Expense Illustration"
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
 