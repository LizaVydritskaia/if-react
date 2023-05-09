import { API_availableHotels } from '../constants';

import { getRequest } from '../getRequest';

export const getAvailableHotels = async (inputValue) => {
  return getRequest(API_availableHotels, {
    params: {
      search: inputValue,
    },
  });
};
