"use client";

import React, { useState } from "react";
import { MoonIcon, SunIcon } from "@radix-ui/react-icons";
import { useTheme } from "next-themes";
import Link from "next/link";

const Navbar = () => {
  const { setTheme } = useTheme();
  const [isLight, setIslight] = useState(false);
  const [isDark, setIsDark] = useState(false);

  const handleLight = () => {
    setTheme("light");
    setIslight(true);
    setIsDark(false);
  };

  const handleDark = () => {
    setTheme("dark");
    setIslight(false);
    setIsDark(true);
  };

  return (
    <>
      <div className="flex justify-between items-center p-4 bg-gray-400 w-full">
        <div className="flex items-center ">
          <Link href="/" className="text-xl font-bold">
            NgaJol
          </Link>
        </div>

        <div className="flex gap-2 md:gap-6 justify-center items-center">
          <Link
            href="/quran"
            className="text-lg font-medium hover:text-gray-800 focus:outline-none"
          >
            Quran
          </Link>
          <Link
            href="/doa-harian"
            className="text-lg font-medium hover:text-gray-800 focus:outline-none"
          >
            Doa 
          </Link>

          <Link
            href="/hadis"
            className="text-lg font-medium hover:text-gray-800 focus:outline-none"
          >
            Hadis
          </Link>

          <div className="flex gap-2 md:gap-4 border-2 rounded-full">
            <button
              onClick={handleLight}
              className={`rounded-full p-2 ${isLight ? "bg-white" : ""}`}
            >
              <SunIcon />
            </button>
            <button
              className={`rounded-full p-2 ${isDark ? "bg-black" : ""}`}
              onClick={handleDark}
            >
              <MoonIcon />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
