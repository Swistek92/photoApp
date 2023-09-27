"use client";
import React, { useEffect, useState } from "react";
import { MoonIcon, SunIcon } from "./SVG";

const Header = () => {
  const [darkMode, setDarkMode] = useState<undefined | Boolean>(undefined);

  const swichMode = () => setDarkMode(!darkMode);

  useEffect(() => {
    if (darkMode) {
      localStorage.setItem("darkMode", "true");
      window.document.documentElement.classList.add("dark");
    } else if (darkMode === false) {
      localStorage.setItem("darkMode", "false");
      window.document.documentElement.classList.remove("dark");
    } else {
      setDarkMode(localStorage.getItem("darkMode") === "true");
    }
  }, [darkMode]);

  return (
    <div className='fixed flex justify-between items-center w-full h-10 p-4 bg-gray-500  dark:bg-gray-900'>
      <div className='flex m-2 p-2 flex-col '>
        <p className='animate-bounce select-none rounded-b-xl'>swistoklik.pl</p>
      </div>

      {!darkMode ? (
        <MoonIcon className='' onClick={swichMode} />
      ) : (
        <SunIcon onClick={swichMode} />
      )}
    </div>
  );
};

export default Header;
