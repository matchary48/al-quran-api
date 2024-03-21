import Link from "next/link";

const HadisList = ({ api }) => {
  return (
    <div className="flex flex-col text-center h-full items-center gap-4 p-4">
      <h1 className="text-2xl font-bold py-4">HADIST-HADIST</h1>

      {api.map((data, index) => {
        const namaHadis = encodeURIComponent(data.name.replace(/ /g, "-"));
        const nama = namaHadis.toLowerCase();

        return (
          <Link
            href={`hadist/${nama}`}
            key={index}
            className="bg-gray-400 w-full p-3 rounded-lg text-xl"
          >
            <div className="flex gap-4">
              <p>{index + 1}. </p>
              <h1>Hadist {data.name}</h1>
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default HadisList;
