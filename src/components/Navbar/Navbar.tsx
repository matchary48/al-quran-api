"use client";

import React, { useState } from "react";
import { MoonIcon, SunIcon } from "@radix-ui/react-icons";
import { useTheme } from "next-themes";
import Link from "next/link";
import { FiMenu, FiX } from "react-icons/fi";

const Navbar = () => {
  const { theme, setTheme } = useTheme();
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <div>
      <div className="flex items-center justify-between p-4 bg-gray-500 ">
        <Link href="/" className="flex items-center">
          <h1 className="text-xl font-bold">NGAJOL</h1>
        </Link>

        <div className="hidden md:flex gap-10 justify-center items-center">
          {" "}
          {/* Hide this on mobile */}
          <Link href="/">HOME</Link>
          <Link href="/">ABOUT</Link>
          <Link href="/">PROFILE</Link>
          <div className="flex items-center">
            <button
              onClick={toggleTheme}
              className={`focus:outline-none rounded-full p-2 ${
                theme === "light"
                  ? "bg-black text-white"
                  : "bg-white text-black"
              }`}
            >
              {theme === "light" ? <MoonIcon /> : <SunIcon />}
            </button>
          </div>
        </div>

        <div className="md:hidden flex gap-5">
          {" "}
          <div className="flex items-center">
            <button
              onClick={toggleTheme}
              className={`focus:outline-none rounded-full p-2 ${
                theme === "light"
                  ? "bg-black text-white"
                  : "bg-white text-black"
              }`}
            >
              {theme === "light" ? <MoonIcon /> : <SunIcon />}
            </button>
          </div>
          <button
            onClick={toggleMenu}
            className="text-gray-300 focus:outline-none text-2xl"
          >
            {showMenu ? <FiX /> : <FiMenu />}
          </button>
        </div>

        {showMenu && (
          <div className="md:hidden absolute top-16 left-4 right-4 bg-gray-500 rounded shadow-md p-4">
            <div className="flex flex-col gap-2">
              <Link href="/" onClick={toggleMenu}>
                HOME
              </Link>
              <Link href="/" onClick={toggleMenu}>
                ABOUT
              </Link>
              <Link href="/" onClick={toggleMenu}>
                PROFILE
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
