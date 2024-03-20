import DetailDoaList from "@/components/DetailDoaList";

const Page = async ({ params: { id } }) => {
  const res = await fetch(`${process.env.DOA_HARIAN_API_URI}/api`);

  if (!res.ok) {
    console.log("error fetching data");
    return;
  }

  const resDetaiData = await fetch(
    `${process.env.DOA_HARIAN_API_URI}/api/${id}`
  );

  if (!resDetaiData.ok) {
    console.log("Error fetching data");
    return;
  }
  const data = await res.json();

  const detaildata = await resDetaiData.json();

  return (
    <>
      <DetailDoaList data={data} detailData={detaildata} />
    </>
  );
};

export default Page;
