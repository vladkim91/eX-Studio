import Client from './';

export const requestGOAuth = async () => {
  const result = await Client.get('/authtest');
  console.log('result', result);
  const authTest = await Client.get(result.data);
  console.log('authTest:', authTest);
  return 'nothing';
};
