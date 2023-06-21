import axios from 'axios';

const cache = new Map();

export const getRequest = (url) => {
  if (!cache.has(url)) {
    cache.set(
      url,
      axios.get(url).then((result) => result.data),
    );
  }

  return cache.get(url);
};
