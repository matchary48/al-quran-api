export const getHadistResponse = async (resource) => {
  const response = await fetch(`${process.env.HADIS_API_URI}/${resource}`);

  const namaHadist = await response.json();

  return namaHadist;
};

export const getDetailHadist = async (resource, query, page) => {
  const response = await fetch(`${process.env.HADIS_API_URI}/${resource}/${query}?page=${page}`);
  // "https://hadis-api-id.vercel.app/hadith/abu-dawud?page=1&limit=20",

    const data = await response.json();

    return data;
}