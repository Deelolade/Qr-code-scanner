// src/components/ThemeToggle.jsx
import { MdOutlineWbSunny } from "react-icons/md";
import { FaRegMoon } from "react-icons/fa";
import React from 'react';
import { useTheme } from '../context/ThemeProvider';

const ThemeToggle = () => {
    const { isDarkMode, toggleTheme } = useTheme();

    return (
        <button
            onClick={toggleTheme}
            className="px-4 py-2  bg-light-secondary text-light-primary dark:bg-dark-secondary rounded-full"
        >
            {isDarkMode ? <MdOutlineWbSunny  className="text-dark-primary text-xl"/>  : <FaRegMoon className="text-light-primary text-xl"/>}
        </button>
    );
};

export default ThemeToggle;