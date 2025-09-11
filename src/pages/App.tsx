import {useEffect, useState} from "react";

import {GradeCalculator} from "./GradeCalculator.tsx";
import {FaRegSun} from "react-icons/fa";
import {FaRegMoon} from "react-icons/fa";
import {Content} from "../components/Content.tsx";


export const App = () => {

    const darkTheme = localStorage.getItem('darkTheme');

    const [isDarkMode, setIsDarkMode] = useState(darkTheme !== 'not-dark');


    useEffect(() => {

        if (isDarkMode) {
            document.body.classList.add("dark");
        } else {
            document.body.classList.remove("dark");
        }

        localStorage.setItem('darkTheme', isDarkMode ? 'dark' : 'not-dark');
    }, [isDarkMode]);


    const toggleDarkMode = () => {
        setIsDarkMode(!isDarkMode);
    };

    return (
        <>
            <header className="flex items-center justify-around bg-[#F0F7FF] dark:bg-gray-800 p-4 text-white">
                <h1 className="text-3xl font-bold text-black dark:text-white">Calculadora Média UNIVESP - dev</h1>
                <button
                    onClick={() => toggleDarkMode()}
                    className="px-4 py-2 bg-gray-800 dark:bg-gray-200 text-white dark:text-black rounded"
                    aria-label="Theme button"
                >
                    {isDarkMode ?
                        <FaRegSun/> : <FaRegMoon/>
                    }
                </button>

            </header>

            <GradeCalculator/>
            <Content/>

        </>
    )
}