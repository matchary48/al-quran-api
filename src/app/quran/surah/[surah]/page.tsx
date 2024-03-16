import Link from "next/link";

const Page = async ({ params: { surah } }) => {
  const res = await fetch(`${process.env.SURAH_API_URI}/quran`);
  const doaId = await fetch(`${process.env.SURAH_API_URI}/quran/${surah}`);

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
  // console.log(doa);

  const detail = doa.ayahs;
  // console.log(detail);

  return (
    <>
      <div className="flex px-2">
        {/* Sidebar */}
        <div className="w-1/4">
          <div className="flex flex-col gap-3 overflow-y-auto h-[550px] relative border-2 p-4 rounded-lg">
            <h1 className="text-xl">Surah: </h1>
            {data.map((surah: any) => (
              <div key={surah.number} className="hover:underline">
                <Link href={`/quran/surah/${surah.number}`}>
                  <h1>{surah.asma.id.short}</h1>
                </Link>
              </div>
            ))}
          </div>
        </div>
        {/* Main Content */}
        <div className="w-3/4 overflow-y-auto h-[550px] border-2">
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

export default Page;
