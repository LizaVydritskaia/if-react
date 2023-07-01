import { combineReducers } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import { authReducer } from './auth.slice';
import { formReducer } from './form.slice';
import { themeReducer } from './theme.slice';

import { hotels } from '../../services/hotels';
import { availableHotels } from '../../services/availableHotels';

const persistConfig = {
  key: 'root',
  storage,
  blacklist: [hotels.reducerPath, availableHotels.reducerPath],
};

export const rootReducer = persistReducer(
  persistConfig,
  combineReducers({
    [hotels.reducerPath]: hotels.reducer,
    [availableHotels.reducerPath]: availableHotels.reducer,
    auth: authReducer,
    form: formReducer,
    theme: themeReducer,
  }),
);
