import { API_availableHotels } from '../services/constants';

import { getRequest } from '../services/getRequest';

const cache = new Map();

export function fetchData(url) {
  if (!cache.has(url)) {
    cache.set(url, getData(url));
  }
  return cache.get(url);
}

async function getData(url, config) {
  if (url === API_availableHotels) {
    return await getRequest(url, config);
  } else {
    throw Error('Not implemented');
  }
}

export const wrapPromise = (promise) => {
  if (promise.status === 'fulfilled') {
    return promise.value;
  } else if (promise.status === 'rejected') {
    throw promise.reason;
  } else if (promise.status === 'pending') {
    throw promise;
  } else {
    promise.status = 'pending';
    promise.then(
      (result) => {
        promise.status = 'fulfilled';
        promise.value = result;
      },
      (reason) => {
        promise.status = 'rejected';
        promise.reason = reason;
      },
    );
    throw promise;
  }
};
