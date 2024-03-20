"use client";

import Link from "next/link";
import React, { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

const DetailDoaList = ({ data, detailData }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const toggleSidebarOpen = () => {
    setIsSidebarOpen(false);
  };

  const togleSideBarClose = () => {
    setIsSidebarOpen(true);
  };

  return (
    <div className="flex px-2">
      {/* Sidebar */}
      <div className={`w-1/4 ${isSidebarOpen ? "" : "hidden"}`}>
        <div className="flex flex-col gap-3 overflow-y-auto h-[550px] relative border-r-2 p-4 rounded-lg">
          <h1 className="text-xl">Surah: </h1>
          {data.map((doa) => (
            <div key={doa.id} className="hover:underline">
              <Link href={`/doa/${doa.id}`}>
                <h1>{doa.doa}</h1>
              </Link>
            </div>
          ))}
        </div>
      </div>
      {/* Button to toggle sidebar */}
      <div className="h-7 w-7 flex justify-center items-center text-2xl p-2">
        <button className="flex items-center">
          {isSidebarOpen ? (
            <FiX onClick={toggleSidebarOpen} />
          ) : (
            <FiMenu onClick={togleSideBarClose} />
          )}
        </button>
      </div>
      {/* Main Content */}
      <div className="w-full overflow-y-auto h-[550px]">
        {detailData.map((detail) => {
          return (
            <div key={detail.id} className="flex flex-col">
              <div className="flex justify-center p-2">
                <h1 className="text-4xl">{detail.doa}</h1>
              </div>
              <div className="p-7 mt-5">
                <h1 className="text-7xl py-6 flex justify-end ">
                  {detail.ayat}
                </h1>
                <h1 className="text-3xl py-4">{detail.latin}</h1>
                <h1 className="text-xl">{detail.artinya}</h1>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default DetailDoaList;
