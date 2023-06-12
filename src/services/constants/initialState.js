import { authStatuses } from './authStatuses';

export const initialState = {
  auth: {
    status: authStatuses.loggedOut,
  },
};
