import { createSlice } from '@reduxjs/toolkit';
import { initialState } from '../../services/constants/initialState';

export const formSlice = createSlice({
  name: 'form',
  initialState: initialState.form,
  reducers: {
    setDestination: (state, action) => ({
      ...state,
      destinationValue: action.payload,
    }),
    setCalendarValues: (state, action) => ({
      ...state,
      checkInOut: action.payload,
    }),
    setChildrenAges: (state, action) => ({
      ...state,
      childrenAges: action.payload,
    }),
  },
});

export const { setDestination, setCalendarValues, setChildrenAges } =
  formSlice.actions;

export const formReducer = formSlice.reducer;
