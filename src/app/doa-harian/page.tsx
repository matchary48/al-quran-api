import Link from "next/link";

const Page = async () => {
  const res = await fetch(`${process.env.DOA_HARIAN_API_URI}/api`);

  if (!res.ok) {
    console.log("error fetching data");
    return;
  }

  const data = await res.json();
  console.log(data);

  return (
    <>
      <div className="flex px-2">
        {/* Sidebar */}
        <div className="w-1/4">
          <div className="flex flex-col gap-3 overflow-y-auto h-[550px] relative border-2 p-4 rounded-lg">
            <h1 className="text-xl">Doa: </h1>
            {data.map((doa: any) => (
              <div key={doa.id} className="hover:underline">
                <Link href={`doa-harian/doa/${doa.doa}`}>
                  <h1>{doa.doa}</h1>
                </Link>
              </div>
            ))}
          </div>
        </div>
        {/* Main Content */}
        <div className="w-3/4 p-4">
          <div className="flex justify-center">
            <h1 className="text-xl font-bold">
              PILIH SALAH SATU DOA DISAMPING
            </h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;
