const Page = async ({params: {nama}}) => {
    const resNamaHadis = await fetch(`${process.env.HADIS_API_URI}/hadith/${nama}`);

    if(!resNamaHadis.ok) {
      console.log('Failed to fetch data');
      return;
    }

    const data = await resNamaHadis.json();
    // console.log(data);
    
  return <div>Nama hadis page</div>;
};

export default Page;
