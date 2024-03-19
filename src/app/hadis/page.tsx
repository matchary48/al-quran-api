import Link from "next/link";

const Page = async () => {
  const resSemuaHadis = await fetch(`${process.env.HADIS_API_URI}/hadith`);

  if (!resSemuaHadis.ok) {
    console.log("Failed to fetch data");
    return;
  }

  const dataHadis = await resSemuaHadis.json();
  console.log(dataHadis);

  return (
    <>
      <div className="flex flex-col text-center h-full items-center">
        {dataHadis.map((data, index) => {
          return (
            <Link href="/hadis" key={index}>
              <h1>{data.name}</h1>
            </Link>
          );
        })}
      </div>
    </>
  );
};

export default Page;
