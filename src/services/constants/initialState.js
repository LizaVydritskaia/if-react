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
    adultsCount: formValues.adultsCount,
    childrenCount: formValues.childrenCount,
    roomCount: formValues.roomCount,
    childrenAges: null,
  },
  search: {
    destinationValue: '',
    checkInOut: '',
    adultsCount: 0,
    childrenAges: '',
    roomCount: 0,
  },
};
