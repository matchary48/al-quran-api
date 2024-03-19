export const getHadistResponse = async (resource) => {
  const response = await fetch(`${process.env.HADIS_API_URI}/${resource}`);

  const namaHadist = await response.json();

  return namaHadist;
};

export const getDetailHadist = async (resource, query) => {
  const response = await fetch(`${process.env.HADIS_API_URI}/${resource}/${query}`);

    const data = await response.json();

    return data;
}