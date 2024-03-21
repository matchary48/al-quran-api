"use client";

import Link from "next/link";

const SurahList = ({ api }) => {
  return (
    <div className="flex flex-col text-center h-full items-center gap-4 p-4">
      {api.map((surah, index) => {
        return (
          <Link
            href={`quran/surah/${surah.number}`}
            key={index}
            className="bg-gray-400 w-full md:w-[1000px] p-3 rounded-lg text-xl"
          >
            <h1>{surah.asma.id.short}</h1>
          </Link>
        );
      })}
    </div>
  );
};

export default SurahList;
