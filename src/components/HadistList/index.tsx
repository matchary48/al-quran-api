import Link from "next/link";

const HadisList = ({ api }) => {
  return (
    <div className="flex flex-col text-center h-full items-center gap-4 p-4">
      {api.map((data, index) => {
        const namaHadis = encodeURIComponent(data.name.replace(/ /g, "-"));
        const nama = namaHadis.toLowerCase();

        return (
          <Link
            href={`hadist/${nama}`}
            key={index}
            className="bg-gray-400 w-full md:w-[1000px] p-3 rounded-lg text-xl"
          >
            <h1>Hadist {data.name}</h1>
          </Link>
        );
      })}
    </div>
  );
};

export default HadisList;
