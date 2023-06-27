import { configureStore } from '@reduxjs/toolkit';
import { persistStore } from 'redux-persist';
import { rootReducer } from './slices';
import { hotels } from '../services/hotels';
import { availableHotels } from '../services/availableHotels';

export const store = configureStore({
  reducer: rootReducer,
  devTools: process.env.NODE_ENV !== 'production',
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ['persist/PERSIST'],
      },
    }).concat([hotels.middleware, availableHotels.middleware]),
});

export const persistor = persistStore(store);
