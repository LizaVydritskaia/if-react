import { API_availableHotels } from '../constants';

import { getRequest } from '../getRequest';

export const getAvailableHotels = async ({
  search,
  checkInOut,
  adults,
  children,
  rooms,
}) => {
  const searchParams = new URLSearchParams({
    search,
    checkInOut,
    adults,
    children,
    rooms,
  });

  return getRequest(`${API_availableHotels}?${searchParams.toString()}`);
};
