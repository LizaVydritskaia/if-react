import { combineReducers } from '@reduxjs/toolkit';
import { authReducer } from './auth.reducer';
import { counterReducer } from './counter.reducer';
import { formReducer } from './form.reducer';

export const rootReducer = combineReducers({
  auth: authReducer,
  filter: counterReducer,
  form: formReducer,
});
