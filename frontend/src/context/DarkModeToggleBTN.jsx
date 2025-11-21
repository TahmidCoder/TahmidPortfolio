import React, { useEffect, useState } from 'react'
import { MdOutlineLightMode } from "react-icons/md";
import { MdOutlineDarkMode } from "react-icons/md";
const DarkModeToggleBTN = () => {
  const [darkMode, setDarkMode] = useState(() => {
    // localStorage থেকে theme পড়ে return করছি
    return localStorage.getItem('theme') === 'dark';
  });

  useEffect(() => {
    const root = window.document.documentElement;

    if (darkMode) {
      root.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      root.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);

  return (
    <button onClick={() => setDarkMode(!darkMode)} className="p-2 rounded-lg">
      {darkMode ? (
        // ☀️ Light Mode Icon
        <MdOutlineLightMode className="w-6 h-6 text-yellow-400" />
      ) : (
        // 🌙 Dark Mode Icon
        <MdOutlineDarkMode className="w-6 h-6 text-gray-800" />
      )}
    </button>
  )
}


export default DarkModeToggleBTN
