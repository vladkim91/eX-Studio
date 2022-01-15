import Client from '.';

export const requestJournalByUser = async (userId) => {
  const result = await Client.get(`user/${userId}`);
  return result.data;
};
