import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

import { useAuthContext } from '../../contexts/Auth.context';

export const PrivateRoutes = () => {
  const { isAuthenticated } = useAuthContext();

  return isAuthenticated ? <Outlet /> : <Navigate to="/sign-in" />;
};
