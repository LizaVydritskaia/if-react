import { initialState } from '../../services/constants/initialState';
import { FILTER_COUNTER, FORM } from '../../services/constants/actionTypes';

export const formReducer = (state = initialState.form, action) => {
  switch (action.type) {
    case FORM.setDestination:
      return { ...state, destinationValue: action.payload };
    case FORM.setCalendar:
      return { ...state, checkInOut: action.payload };
    case FORM.setChildrenAges:
      return { ...state, childrenAges: action.payload };
    case FILTER_COUNTER.adultsIncrement:
      return {
        ...state,
        adults: state.adults + 1,
      };
    case FILTER_COUNTER.childrenIncrement:
      return {
        ...state,
        children: state.children + 1,
      };
    case FILTER_COUNTER.roomIncrement:
      return { ...state, room: state.room + 1 };
    case FILTER_COUNTER.adultsDecrement:
      return { ...state, adults: state.adults - 1 };
    case FILTER_COUNTER.childrenDecrement:
      return { ...state, children: state.children - 1 };
    case FILTER_COUNTER.roomDecrement:
      return { ...state, room: state.room - 1 };
    default:
      return state;
  }
};
