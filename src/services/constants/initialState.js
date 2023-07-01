import { authStatuses } from './authStatuses';
import { formValues } from './formValues';

export const initialState = {
  auth: {
    status: authStatuses.loggedOut,
  },
  form: {
    destinationValue: null,
    checkInOut: null,
    adults: formValues.adultsCount,
    children: formValues.childrenCount,
    room: formValues.roomCount,
    childrenAges: null,
  },
  theme: {
    mode: 'light',
  },
};
