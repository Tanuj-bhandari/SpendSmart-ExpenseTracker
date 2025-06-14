import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

const Navbar = ({ setIsLoggedIn }) => {
  const token = localStorage.getItem("token");
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsLoggedIn(false);
    navigate("/login");
  };

  return (
    <nav className="bg-white dark:bg-gray-800 shadow-lg px-6 py-4 sticky top-0 z-50">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold text-blue-600 dark:text-blue-400">💸 SpendSmart</h1>

        <button 
          className="md:hidden text-gray-700 dark:text-gray-300" 
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>

        <div className={`space-x-6 md:flex ${menuOpen ? "flex flex-col items-center mt-4" : "hidden"}`}>
          {!token ? (
            <>
              <Link to="/" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition">Home</Link>
              <Link to="/login" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition">Login</Link>
              <Link to="/register" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition">Register</Link>
            </>
          ) : (
            <>
              <Link to="/" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition">Dashboard</Link>
              <button 
                onClick={handleLogout} 
                className="text-red-600 dark:text-red-400 hover:underline transition"
              >
                Logout
              </button>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
