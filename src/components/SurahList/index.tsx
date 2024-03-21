"use client";

import Link from "next/link";

const SurahList = ({ api }) => {
  return (
    <div className="flex flex-col text-center h-full items-center gap-4 p-4">
      <h1 className="text-2xl font-bold py-4">SURAH-SURAH</h1>
      {api.map((surah, index) => {
        return (
          <Link
            href={`quran/surah/${surah.number}`}
            key={index}
            className="bg-gray-400 w-full  p-3 rounded-lg text-xl"
          >
            <div className="flex gap-4">
              <p>{index + 1}. </p>
              <h1>{surah.asma.id.short}</h1>
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default SurahList;
