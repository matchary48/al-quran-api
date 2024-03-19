import DetailHadistList from "@/components/DetailHadistList";
import Pagination from "@/components/utilities/Pagination";
import { getDetailHadist } from "@/lib/api-libs";

const Page = async ({ params: { nama } }) => {
  const data = await getDetailHadist("hadith", `${nama}`);

  const items = data.items;

  return (
    <>
      <DetailHadistList data={data} items={items} />
    </>
  );
};

export default Page;
