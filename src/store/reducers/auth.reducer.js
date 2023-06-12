import { AUTH } from '../../services/constants/actionTypes';
import { initialState } from '../../services/constants/initialState';

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case AUTH.changeStatus:
      return { ...state, status: action.payload };
    default:
      return state;
  }
};
