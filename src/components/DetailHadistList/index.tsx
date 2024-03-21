'use client';

import { ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";

const DetailHadistList = ({ data, items }) => {
    const router = useRouter();

    const handleBack = (e) => {
        e.preventDefault();
        router.back();
    }
    
    return (
    <>
      <div className="p-4">
        <div className="flex text-xl justify-between ">
          <button onClick={handleBack}>
            <ArrowLeft />
          </button>
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
