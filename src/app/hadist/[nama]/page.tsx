import Pagination from "@/components/utilities/Pagination";

const Page = async ({ params: { nama } }) => {
  const resNamaHadis = await fetch(
    `${process.env.HADIS_API_URI}/hadith/${nama}`
  );

  if (!resNamaHadis.ok) {
    console.log("Failed to fetch data");
    return;
  }

  const data = await resNamaHadis.json();
  console.log(data);

  const items = data.items;
  console.log(items);
  

  return (
    <>
      <div>
        <div>
          <h1>{data.name}</h1>
        </div>
        {items.map((item, index) => {
          return (
            <div key={index}>
              <h1>{item.number} . {item.arab}</h1>
              <h1>{item.id}</h1>
            </div>
          )
        })}
      </div>
    </>
  );
};

export default Page;
