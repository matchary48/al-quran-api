"use client";

import React, { useState } from "react";
import BackButton from "../utilities/BackButton";

const DetailDoaList = ({ data, detailData }) => {
  return (
    <>
      <BackButton />
      <div className="flex px-2">
        {/* Main Content */}
        <div className="w-full">
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
    </>
  );
};

export default DetailDoaList;
