"use client";

import Link from "next/link";
import React, { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

const DetailSurahList = ({ data, doa, detail }) => {
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
          {data.map((surah: any) => (
            <div key={surah.number} className="hover:underline">
              <Link href={`/quran/surah/${surah.number}`}>
                <h1>{surah.asma.id.short}</h1>
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
      <div
        className="w-full overflow-y-auto h-[550px]"
      >
        <div className="flex justify-center">
          <div className=" p-4 rounded-lg mb-4 flex flex-col  justify-center">
            <h1 className="text-3xl">Surah {doa.asma.id.short}</h1>
            <div className="flex justify-center gap-2 text-md">
              <p>{doa.type.id} - </p>
              <p>{doa.ayahCount} Ayat</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-3">
          {detail.map((ayat, index) => {
            return (
              <div key={ayat.number} className="flex flex-col p-2 gap-4">
                <div className="flex justify-end">
                  <p className="text-5xl right-0">{ayat.text.ar}</p>
                </div>
                <p className="text-xl">{ayat.text.read}</p>
                <audio controls>
                  <source
                    className="p-4"
                    src={ayat.audio.url}
                    type="audio/mpeg"
                  />
                </audio>
                <p>
                  [{index + 1}:] {ayat.translation.id}
                </p>
                <hr />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default DetailSurahList;
