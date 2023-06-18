import { AVAILABLE_HOTELS } from '../../services/constants/actionTypes';

export const searchAction = ({
  destinationValue,
  calendarValue,
  adultsCount,
  childrenAges,
  roomsCount,
}) => ({
  type: AVAILABLE_HOTELS.setSearchParams,
  payload: {
    destinationValue,
    calendarValue,
    adultsCount,
    childrenAges,
    roomsCount,
  },
});
