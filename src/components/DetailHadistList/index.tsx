"use client";

import BackButton from "../utilities/BackButton";

const DetailHadistList = ({ data, items }) => {
  return (
    <>
      <div className="p-4">
        <div className="flex text-xl justify-between ">
          <BackButton />
          <h1>Hadist {data.name}</h1>
        </div>
        <div>
          {items.map((item, index) => {
            return (
              <div key={index}>
                <h1>
                  {item.number} . {item.arab}
                </h1>
                <h1>{item.id}</h1>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default DetailHadistList;
