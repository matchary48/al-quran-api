import DetailSurahList from "@/components/DetailSurahList";

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
  const detail = doa.ayahs;

  return (
    <>
      <DetailSurahList data={data} detail={detail} doa={doa} />
    </>
  );
};

export default Page;
