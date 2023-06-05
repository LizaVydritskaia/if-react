import { API_availableHotels } from '../constants';

import { fetchData, wrapPromise } from '../../helpers/wrapPromise';

export const getAvailableHotels = async (inputValue) => {
  return wrapPromise(
    fetchData(API_availableHotels, {
      params: {
        search: inputValue,
      },
    }),
  );
};
