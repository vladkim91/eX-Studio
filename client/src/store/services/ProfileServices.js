import Client from './';

export const createUser = async (userInfo) => {
  const result = await Client.post('/user', userInfo);
  return result.data;
};

export const getUserById = async (userId) => {
  const result = await Client.get(`user/${userId}`);
  return result.data;
};

export const getUserFavoriteWorkouts = async (userId) => {
  const result = await Client.get(`user/${userId}`);
  return result.data;
};

export const getUserCustomWorkouts = async (userId) => {
  const result = await Client.get(`user/${userId}`);
  return result.data;
};
