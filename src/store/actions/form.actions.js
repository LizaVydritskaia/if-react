import { FORM } from '../../services/constants/actionTypes';

export const destinationAction = (value) => ({
  type: FORM.setDestination,
  payload: value,
});

export const checkInOutAction = (value) => ({
  type: FORM.setCalendar,
  payload: value,
});

export const adultsAction = (value) => ({
  type: FORM.setAdults,
  payload: value,
});

export const childrenAction = (value) => ({
  type: FORM.setChildren,
  payload: value,
});

export const roomAction = (value) => ({
  type: FORM.setRoom,
  payload: value,
});

export const childrenAgesAction = (value) => ({
  type: FORM.setChildrenAges,
  payload: value,
});
