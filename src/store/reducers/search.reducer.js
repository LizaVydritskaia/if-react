import { AVAILABLE_HOTELS } from '../../services/constants/actionTypes';
import { initialState } from '../../services/constants/initialState';

export const searchReducer = (state = initialState.search, action) => {
  switch (action.type) {
    case AVAILABLE_HOTELS.setSearchParams:
      return action.payload;
    default:
      return state;
  }
};
