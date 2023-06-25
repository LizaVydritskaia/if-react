import { combineReducers } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import { authReducer } from './auth.slice';
import { counterReducer } from './counter.slice';
import { formReducer } from './form.slice';
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
    filter: counterReducer,
    form: formReducer,
  }),
);
