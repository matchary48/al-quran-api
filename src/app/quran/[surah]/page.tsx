import Link from "next/link";

const Page = async ({ params: { surah } }) => {
  const res = await fetch(`${process.env.API_URI}/quran`);
  const doaId = await fetch(`${process.env.API_URI}/quran/${surah}`);

  if (!res.ok) {
    console.log("failed to fetch data");
    return;
  }
  const resData = await res.json();
  const data = resData.data;

  if (!doaId.ok) {
    console.log("Failed to fetch data");
    return;
  }

  const resDoa = await doaId.json();
  const doa = resDoa.data;

  const detail = doa.ayahs;
  console.log(detail);

  return (
    <>
      <div className="flex p-2">
        {/* Sidebar */}
        <div className="w-1/4">
          <div className="flex flex-col gap-3 overflow-y-auto h-[550px] relative border-2 p-4 rounded-lg">
            <h1 className="text-xl">Surah: </h1>
            {data.map((surah: any) => (
              <div key={surah.number} className="hover:underline">
                <Link href={`/quran/${surah.number}`}>
                  <h1>{surah.asma.id.short}</h1>
                </Link>
              </div>
            ))}
          </div>
        </div>
        {/* Main Content */}
        <div className="w-3/4 overflow-y-auto h-[550px] border-2">
          <div className=" p-4 rounded-lg mb-4 flex justify-center">
            <h1 className="text-xl">Surah {doa.asma.id.short}</h1>
          </div>
          <div className="flex flex-col gap-3">
            {detail.map((ayat) => {
              return (
                <div
                  key={ayat.number.insurah}
                  className="flex flex-col border-2 p-2 gap-2"
                >
                  <p className="text-xl right-0">{ayat.text.ar}</p>
                  <p>{ayat.text.read}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;
