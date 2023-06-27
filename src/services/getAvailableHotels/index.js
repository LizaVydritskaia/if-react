import { API_availableHotels } from '../constants';

import { getRequest } from '../getRequest';

export const getAvailableHotels = async (search) => {
  const searchParams = new URLSearchParams({ search });

  return getRequest(`${API_availableHotels}?${searchParams.toString()}`);
};
