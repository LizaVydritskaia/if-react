import { API_availableHotels } from '../constants';

import { fetchData, wrapPromise } from '../../helpers/wrapPromise';

export const getAvailableHotels = async (
  destinationValue,
  adultsValue,
  childrenValue,
  roomValue,
) => {
  return wrapPromise(
    fetchData(API_availableHotels, {
      params: {
        search: destinationValue,
        adults: adultsValue,
        children: childrenValue,
        room: roomValue,
      },
    }),
  );
};
