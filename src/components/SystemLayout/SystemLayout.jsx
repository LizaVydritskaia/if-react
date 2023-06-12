import React from 'react';
import { Outlet, ScrollRestoration } from 'react-router-dom';
import { Provider } from 'react-redux';

import { Sprite } from '../Sprite';

import { store } from '../../store';

export const SystemLayout = () => (
  <>
    <ScrollRestoration />
    <Sprite />
    <Provider store={store}>
      <Outlet />
    </Provider>
  </>
);
