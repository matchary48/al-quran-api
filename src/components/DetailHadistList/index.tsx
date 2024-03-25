"use client";

import { useState } from "react";
import BackButton from "../utilities/BackButton";
import Pagination from "../utilities/Pagination";

const DetailHadistList = ({ data, items }) => {
  const [page, setPage] = useState(1);
  return (
    <>
      <BackButton />
      <div className="flex justify-center p-2">
        <h1 className="md:text-4xl text-2xl">{data.name}</h1>
      </div>
      <div className="flex px-2">
        <div className="w-full">
          {items.map((item, index) => {
            return (
              <div key={index} className="flex p-4 gap-4">
                <div className="flex">
                  <p>{item.number}.</p>
                </div>
                <div className="flex flex-col">
                  <h1>{item.arab}</h1>
                  <h1>
                    <blockquote>{item.id}</blockquote>
                  </h1>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <Pagination
        page={data.pagination.currentPage}
        lastPage={data.pagination.totalPages}
        setPage={page}
      />
    </>
  );
};

export default DetailHadistList;
