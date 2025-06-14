import { FaGithub, FaShieldAlt, FaFileContract } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-sm py-6  border-t border-gray-300 dark:border-gray-700">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-6">
        <p>&copy; {new Date().getFullYear()} SpendSmart. All rights reserved.</p>

        <div className="flex space-x-6">
          <a
            href="https://github.com/tanuj-bhandari"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:text-blue-600 dark:hover:text-blue-400 transition"
          >
            <FaGithub /> GitHub
          </a>
          <a
            href="#"
            className="flex items-center gap-2 hover:text-blue-600 dark:hover:text-blue-400 transition"
          >
            <FaShieldAlt /> Privacy
          </a>
          <a
            href="#"
            className="flex items-center gap-2 hover:text-blue-600 dark:hover:text-blue-400 transition"
          >
            <FaFileContract /> Terms
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
