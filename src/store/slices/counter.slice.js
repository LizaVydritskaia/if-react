import { createSlice } from '@reduxjs/toolkit';
import { initialState } from '../../services/constants/initialState';

export const counterSlice = createSlice({
  name: 'counter',
  initialState: initialState.filter,
  reducers: {
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
  adultsIncrement,
  childrenIncrement,
  roomIncrement,
  adultsDecrement,
  childrenDecrement,
  roomDecrement,
} = counterSlice.actions;

export const counterReducer = counterSlice.reducer;
