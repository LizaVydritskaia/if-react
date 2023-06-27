import React from 'react';
import { Outlet, ScrollRestoration } from 'react-router-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import { Loader } from '../Loader';
import { Sprite } from '../Sprite';

import { persistor, store } from '../../store';

export const SystemLayout = () => (
  <>
    <ScrollRestoration />
    <Sprite />
    <Provider store={store}>
      <PersistGate loading={<Loader />} persistor={persistor}>
        <Outlet />
      </PersistGate>
    </Provider>
  </>
);
