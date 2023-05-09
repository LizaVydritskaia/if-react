import { API_popularHotels } from '../constants';

import { getRequest } from '../getRequest';

export const getHotels = () => {
  return getRequest(API_popularHotels);
};
