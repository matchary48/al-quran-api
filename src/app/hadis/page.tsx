import Link from "next/link";

const Page = async () => {
  const resSemuaHadis = await fetch(`${process.env.HADIS_API_URI}/hadith`);

  if (!resSemuaHadis.ok) {
    console.log("Failed to fetch data");
    return;
  }

  const dataHadis = await resSemuaHadis.json();
  // console.log(dataHadis);

  return (
    <>
      <div className="flex flex-col text-center h-full items-center gap-4 p-4">
        {dataHadis.map((data, index) => {
            const namaHadis = encodeURIComponent(data.name.replace(/ /g, "-"));
            const nama = namaHadis.toLowerCase()
            
           return (
             <Link
               href={`hadis/${nama}`}
               key={index}
               className="bg-gray-400 w-full md:w-[1000px] p-3 rounded-lg text-xl"
             >
               <h1>{data.name}</h1>
             </Link>
           );
        })}
      </div>
    </>
  );
};

export default Page;
