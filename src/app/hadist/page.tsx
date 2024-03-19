import HadisList from "@/components/HadistList";
import { getHadistResponse } from "@/lib/api-libs";
import Link from "next/link";

const Page = async () => {
  const resSemuaHadist = await getHadistResponse("hadith");

  return (
    <>
      <HadisList api={resSemuaHadist} />
    </>
  );
};

export default Page;
