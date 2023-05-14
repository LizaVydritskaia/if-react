import axios from 'axios';

export const getRequest = async (url, config) => {
  const data = await axios.get(url, config);
  return data.data;
};
