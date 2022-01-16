import Client from '.';

export const getJournalByUser = async (userId) => {
  const result = await Client.get(`journal/${userId}?noteLimit=5`);
  return result.data;
};
