import Client from '.';

export const getJournalByUser = async (userId) => {
  const result = await Client.get(`journal/${userId}`);
  return result.data;
};
