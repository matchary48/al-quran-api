import DetailHadistList from "@/components/DetailHadistList";
import Pagination from "@/components/utilities/Pagination";
import { getDetailHadist } from "@/libs/api-libs";

const Page = async ({ params: { nama } }) => {
  const page = 4;
  const data = await getDetailHadist("hadith", `${nama}`, `${page}`);

  const items = data.items;

  return (
    <>
      <DetailHadistList data={data} items={items} />
    </>
  );
};

export default Page;
