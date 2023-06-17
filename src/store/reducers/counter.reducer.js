import { initialState } from '../../services/constants/initialState';
import { FILTER_COUNTER } from '../../services/constants/actionTypes';

export const counterReducer = (state = initialState.filter, action) => {
  switch (action.type) {
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
