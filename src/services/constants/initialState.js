import { authStatuses } from './authStatuses';
import { formValues } from './formValues';

export const initialState = {
  auth: {
    status: authStatuses.loggedOut,
  },
  filter: {
    adults: formValues.adultsCount,
    children: formValues.childrenCount,
    room: formValues.roomCount,
  },
  form: {
    destinationValue: null,
    checkInOut: null,
    childrenAges: null,
  },
  search: {
    destinationValue: '',
    calendarValue: '',
    adultsCount: 0,
    childrenAges: '',
    roomsCount: 0,
  },
};
