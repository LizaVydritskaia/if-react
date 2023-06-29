import { FORM } from '../../services/constants/actionTypes';

export const destinationAction = (value) => ({
  type: FORM.setDestination,
  payload: value,
});

export const checkInOutAction = (value) => ({
  type: FORM.setCalendar,
  payload: value,
});

export const childrenAgesAction = (value) => ({
  type: FORM.setChildrenAges,
  payload: value,
});

export const counterActions = (actionType) => ({
  type: actionType,
});
