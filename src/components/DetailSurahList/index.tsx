"use client";

import React, { useState } from "react";
import BackButton from "../utilities/BackButton";

const DetailSurahList = ({ data, doa, detail }) => {
  return (
    <>
      <BackButton />
      <div className="flex px-2">
        {/* Main Content */}
        <div className="w-full ">
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
    </>
  );
};

export default DetailSurahList;
