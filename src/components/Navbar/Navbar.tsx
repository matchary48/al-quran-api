"use client";

"use client";
import React, { useState } from "react";
import { MoonIcon, SunIcon } from "@radix-ui/react-icons";
import { useTheme } from "next-themes";
import Link from "next/link";

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
          <Link href="/quran">Quran</Link>
          <Link href="/doa">Doa</Link>
          <Link href="/hadist">Hadist</Link>
          <div className="flex items-center">
            <button
              onClick={toggleTheme}
              className=" focus:outline-none border-2 rounded-full p-2"
            >
              {theme === "light" ? <MoonIcon /> : <SunIcon />}
            </button>
          </div>
        </div>

        <div className="md:hidden flex gap-5">
          {" "}
          <button
            onClick={toggleMenu}
            className="text-gray-300 focus:outline-none text-xl"
          >
            ☰
          </button>
          <div className="flex items-center">
            <button
              onClick={toggleTheme}
              className="text-gray-300 focus:outline-none border-2 p-2 rounded-full"
            >
              {theme === "light" ? <MoonIcon /> : <SunIcon />}
            </button>
          </div>
        </div>

        {showMenu && (
          <div className="md:hidden absolute top-16 left-4 right-4 bg-gray-500 rounded shadow-md p-4">
            <div className="flex flex-col gap-2">
              <Link href="/quran" onClick={toggleMenu}>
                Quran
              </Link>
              <Link href="/doa" onClick={toggleMenu}>
                Doa
              </Link>
              <Link href="/hadist" onClick={toggleMenu}>
                Hadist
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
