import React from 'react';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Outlet,
  Route,
} from 'react-router-dom';

import { App } from '../components/App';
import { HotelPage } from '../components/HotelPage';
import { SignInPage } from '../components/SignInPage';
import { SystemLayout } from '../components/SystemLayout';
import { PrivateRoutes } from '../components/PrivateRoutes';

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<SystemLayout />}>
      <Route path="/sign-in" element={<SignInPage />} />
      <Route element={<PrivateRoutes />}>
        <Route path="/" element={<App />} />
        <Route path="/" element={<Outlet />}>
          <Route path="/:id" element={<HotelPage />} />
        </Route>
      </Route>
    </Route>,
  ),
);
