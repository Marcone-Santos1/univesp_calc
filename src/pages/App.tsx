import {useState} from "react";
import GradeCalculator from "./GradeCalculator.tsx";

import {FaRegSun} from "react-icons/fa";
import {FaRegMoon} from "react-icons/fa";


export const App = () => {

    const [isDarkMode, setIsDarkMode] = useState(false); // Estado para controlar o dark mode

    const toggleDarkMode = () => {
        setIsDarkMode(!isDarkMode);
        document.body.classList.toggle("dark");
    };

    return (
        <>
            <header className="flex items-center justify-around bg-[#F0F7FF] dark:bg-gray-800 p-4 text-white">
                <h1 className="text-3xl font-bold text-black dark:text-white">Calculadora - UNIVESP</h1>
                <button
                    onClick={() => toggleDarkMode()}
                    className="px-4 py-2 bg-gray-800 dark:bg-gray-200 text-white dark:text-black rounded"
                >
                    {isDarkMode ?
                        <FaRegSun/> : <FaRegMoon/>
                    }
                </button>

            </header>

            <GradeCalculator/>

        </>
    )
}