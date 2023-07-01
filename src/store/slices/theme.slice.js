import { createSlice } from '@reduxjs/toolkit';
import { initialState } from '../../services/constants/initialState';

export const themeSlice = createSlice({
  name: 'theme',
  initialState: initialState.theme,
  reducers: {
    toggleThemeMode: (state, action) => ({ ...state, mode: action.payload }),
  },
});

export const { toggleThemeMode } = themeSlice.actions;

export const themeReducer = themeSlice.reducer;
