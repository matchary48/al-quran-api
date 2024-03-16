"use client";

import * as React from "react";
import { MoonIcon, SunIcon } from "@radix-ui/react-icons";
import { useTheme } from "next-themes";
import Link from "next/link";
import Search from "./Search";

const Navbar = () => {
  const { setTheme } = useTheme();

  return (
    <>
      <div className="flex justify-between items-center p-4 bg-gray-400 w-full">
        <div className="flex items-center ">
          <Link href="/" className="text-xl font-bold">
            NgaJol
          </Link>{" "}
        </div>

        <div className="flex gap-6 justify-center items-center">
          <Link
            href="/Surah"
            className="text-lg font-medium hover:text-gray-800 focus:outline-none"
          >
            Surah
          </Link>
          <button className="text-lg font-medium hover:text-gray-800 focus:outline-none">
            Doa Harian
          </button>

          <div className="flex gap-4">
            <button
              className="border-2 p-2 rounded-2xl"
              onClick={() => setTheme("light")}
            >
              <SunIcon />
            </button>
            <button
              className="border-2 p-2 rounded-2xl"
              onClick={() => setTheme("dark")}
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
