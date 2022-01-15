import Client from '.';

export const getJournalByUser = async (userId) => {
  const result = await Client.get(`user/${userId}`);
  return result.data;
};
