import React from 'react'
import {  BsMoonFill, BsSunFill } from "react-icons/bs";
import { useState, useEffect } from 'react';
const themes = {
    light: "light",
    dark: "dark",
  };
  const getThemeFromLocalStorage = () => {
    return localStorage.getItem("theme" || themes.dark);
  };
function Header() {
    const [theme, setTheme] = useState(getThemeFromLocalStorage());
    const handleTheme = () => {
      const { light, dark } = themes;
      const newTheme = theme === dark ? light : dark;
      document.documentElement.setAttribute("data-theme", theme);
      setTheme(newTheme);
    };
  
    useEffect(() => {
      document.documentElement.setAttribute("data-theme", theme);
      localStorage.setItem("theme", theme);
    }, [theme]);
  
      
  return (
    <div className='flex items-center justify-between'>
        <div className="logo">
          <h2 className="text-4xl my-5">Crud App with Json Server</h2>
        </div>
        <div className="theme">
        <label className="swap swap-rotate ">
            <input type="checkbox" onClick={handleTheme} />
            <BsSunFill className="swap-on h-7 w-7" />
            <BsMoonFill className="swap-off h-7 w-7" />
          </label>
        </div>
    </div>
  )
}

export default Header