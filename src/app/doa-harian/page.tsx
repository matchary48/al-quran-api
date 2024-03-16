import DoaList from "@/components/DoaList";

const Page = async () => {
  const res = await fetch(`${process.env.DOA_HARIAN_API_URI}/api`);

  if (!res.ok) {
    console.log("error fetching data");
    return;
  }

  const data = await res.json();

  return (
    <>
      <DoaList api={data} />
    </>
  );
};

export default Page;
