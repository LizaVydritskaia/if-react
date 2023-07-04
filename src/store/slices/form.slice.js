import { createSlice } from '@reduxjs/toolkit';
import { initialState } from '../../services/constants/initialState';

export const formSlice = createSlice({
  name: 'form',
  initialState: initialState.form,
  reducers: {
    setFormValue: (state, action) => ({ ...state, ...action.payload }),
    adultsIncrement: (state) => ({
      ...state,
      adults: state.adults + 1,
    }),
    childrenIncrement: (state) => ({
      ...state,
      children: state.children + 1,
    }),
    roomIncrement: (state) => ({ ...state, room: state.room + 1 }),
    adultsDecrement: (state) => ({ ...state, adults: state.adults - 1 }),
    childrenDecrement: (state) => ({ ...state, children: state.children - 1 }),
    roomDecrement: (state) => ({ ...state, room: state.room - 1 }),
  },
});

export const {
  setFormValue,
  adultsIncrement,
  childrenIncrement,
  roomIncrement,
  adultsDecrement,
  childrenDecrement,
  roomDecrement,
} = formSlice.actions;

export const formReducer = formSlice.reducer;
