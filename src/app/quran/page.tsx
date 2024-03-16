import SurahList from "@/components/SurahList";

const Page = async () => {
  const res = await fetch(`${process.env.SURAH_API_URI}/quran`);

  if (!res.ok) {
    console.log("failed to fetch data");
    return;
  }

  const resData = await res.json();
  const dataSurah = resData.data;

  return (
    <>
      <SurahList api={dataSurah} />
    </>
  );
};

export default Page;
