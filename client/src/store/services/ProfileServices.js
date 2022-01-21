import Client from './';

export const createUser = async (userInfo) => {
  const result = await Client.post('user', userInfo);
  return result.data;
};

export const getUserInfoById = async (userId) => {
  const result = await Client.get(`user/info`);
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

export const getUserMain = async () => {
  const result = await Client.get(`user/`);
  return result.data;
};

export const getUserProfile = async (userId) => {
  const result = await Client.get(`user/${userId}/profile`);
  return result.data;
};

export const getRoutineByUserId = async (userId) => {
  const result = await Client.get(`routine/${userId}`);
  return result.data;
};
