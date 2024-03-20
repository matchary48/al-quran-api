"use client";

import Link from "next/link";
import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

const DoaList = ({ api }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="flex px-2">
      {/* Sidebar */}
      <div className={`w-1/4 ${isSidebarOpen ? "" : "hidden"}`}>
        <div className="flex flex-col gap-3 overflow-y-auto h-[550px] relative border-r-2 p-4 rounded-lg">
          <h1 className="text-xl">Surah: </h1>
          {api.map((doa) => (
            <div key={doa.id} className="hover:underline">
              <Link href={`doa/${doa.id}`}>
                <h1>{doa.doa}</h1>
              </Link>
            </div>
          ))}
        </div>
      </div>
      {/* Button to toggle sidebar */}
      <div className="h-7 w-7 flex justify-center items-center text-2xl p-2">
        <button onClick={toggleSidebar} className="flex items-center">
          {isSidebarOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>
      {/* Main Content */}
      <div className="w-full p-4">
        <div className="flex justify-center">
          <h1 className="text-xl font-bold">PILIH SALAH SATU DOA DISAMPING</h1>
        </div>
      </div>
    </div>
  );
};

export default DoaList;
