import Link from "next/link";

const Home = async () => {
  const res = await fetch(`${process.env.API_URI}/quran`);

  if (!res.ok) {
    console.log("failed to fetch data");
    return;
  }

  const resData = await res.json();
  const data = resData.data;
  console.log(data);

  return (
    <>
      <div className="flex flex-col gap-3 p-2">
        {data.map((doa: any) => {
          return (
            <div key={doa.number} className="border-2 p-4 rounded-lg">
                <h1>{doa.asma.id.short}</h1>
                <p>Ayat: {doa.ayat}</p>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Home;
