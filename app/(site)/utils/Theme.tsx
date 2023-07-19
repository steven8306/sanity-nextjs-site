"use client";

import { useState } from "react";
import { FiSun, FiMoon } from "react-icons/fi";

export default function Theme() {
  const [theme, setTheme] = useState<String>("dark");
  const isLight: boolean = theme === "light";

  function toggleTheme() {
    if (theme === "dark") {
      document.documentElement.classList.remove("dark");
      window.localStorage.setItem("theme", "light");
      setTheme("light");
      // setTheme(`${window.localStorage.getItem("theme")}`);
    } else {
      document.documentElement.classList.add("dark");
      window.localStorage.setItem("theme", "dark");
      setTheme("dark");
    }
  }

  return (
    <div>
      <button
        onClick={toggleTheme}
        className={`dark:bg-[#1d1d20] bg-zinc-100 dark:text-purple-400 text-zinc-500 rounded-full p-2 duration-300 transition-transform text-xl ${
          isLight ? "-rotate-180" : "rotate-0"
        }`}
      >
        {isLight ? <FiSun /> : <FiMoon />}
      </button>
    </div>
  );
}
