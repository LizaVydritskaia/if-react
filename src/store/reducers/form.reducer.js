import { initialState } from '../../services/constants/initialState';
import { FORM } from '../../services/constants/actionTypes';

export const formReducer = (state = initialState.form, action) => {
  switch (action.type) {
    case FORM.setDestination:
      return { ...state, destinationValue: action.payload };
    case FORM.setCalendar:
      return { ...state, checkInOut: action.payload };
    case FORM.setAdults:
      return { ...state, adultsCount: action.payload };
    case FORM.setChildren:
      return { ...state, childrenCount: action.payload };
    case FORM.setRoom:
      return { ...state, roomCount: action.payload };
    case FORM.setChildrenAges:
      return { ...state, childrenAges: action.payload };
    default:
      return state;
  }
};
