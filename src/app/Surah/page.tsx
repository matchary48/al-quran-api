import Link from "next/link";

const Page = async () => {
  const res = await fetch(`${process.env.API_URI}/quran`);

  if (!res.ok) {
    console.log("failed to fetch data");
    return;
  }

  const resData = await res.json();
  const data = resData.data;

  return (
    <>
      <div className="flex p-2">
        {/* Sidebar */}
        <div className="w-1/4">
          <div className="flex flex-col gap-3 overflow-y-auto h-[550px] relative border-2 p-4 rounded-lg">
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
        <div className="w-3/4 p-4">
          <div className="flex justify-center">
            <h1 className="text-xl font-bold">
              PILIH SALAH SATU SURAT DISAMPING
            </h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;
