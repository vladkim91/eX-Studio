import Client from './';

export const requestGOAuth = async () => {
  const result = await Client.get('/authtest');
  console.log(result);
};
