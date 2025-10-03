
import { Link } from "react-router-dom";
import { FaRegMoon, FaRegSun } from "react-icons/fa";

interface NavBarProps {
  isDarkMode: boolean;
  toggleDarkMode: () => void;
}

export const NavBar = ({ isDarkMode, toggleDarkMode }: NavBarProps) => {
  return (
    <header className="flex items-center justify-around bg-[#F0F7FF] dark:bg-gray-800 p-4 shadow-md">
      <Link to="/" className="text-xl font-bold text-black dark:text-white">
        Calculadora UNIVESP
      </Link>

      <nav className="flex items-center space-x-4">
        <Link to="/" className="text-gray-700 dark:text-gray-300 hover:text-blue-500">Início</Link>
        <Link to="/sobre" className="text-gray-700 dark:text-gray-300 hover:text-blue-500">Sobre</Link>
        <Link to="/blog" className="text-gray-700 dark:text-gray-300 hover:text-blue-500">Blog</Link>

        <button
          onClick={toggleDarkMode}
          className="p-2 bg-gray-700 dark:bg-gray-200 text-white dark:text-black rounded-full"
          aria-label="Theme button"
        >
          {isDarkMode ? <FaRegSun /> : <FaRegMoon />}
        </button>
      </nav>
    </header>
  );
};