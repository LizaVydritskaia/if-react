import { combineReducers } from '@reduxjs/toolkit';
import { authReducer } from './auth.reducer';
import { formReducer } from './form.reducer';

export const rootReducer = combineReducers({
  auth: authReducer,
  form: formReducer,
});
