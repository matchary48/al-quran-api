export const getHadistResponse = async (resource) => {
  const response = await fetch(`${process.env.HADIS_API_URI}/${resource}`);

  const namaHadist = await response.json();

  return namaHadist;
};

