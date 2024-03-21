"use client";

import Link from "next/link";

const DoaList = ({ api }) => {
  return (
    <div className="flex flex-col text-center h-full items-center gap-4 p-4">
      <h1 className="text-2xl font-bold py-4">DOA SEHARI-HARI</h1>
      {api.map((doa, index) => {
        return (
          <Link
            href={`doa/${doa.id}`}
            key={index}
            className="bg-gray-400 w-full p-3 rounded-lg text-xl"
          >
            <div className="flex gap-4">
              <p>{index + 1}. </p>
              <h1>{doa.doa}</h1>
            </div>{" "}
          </Link>
        );
      })}
    </div>
  );
};

export default DoaList;
