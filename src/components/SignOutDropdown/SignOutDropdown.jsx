import React from 'react';

import { Icon } from '../Icon';
// import { useNavigate } from 'react-router-dom';
//
// import { useAuthContext } from '../../contexts/Auth.context';

import './SignOutDropdown.css';

export const SignOutDropdown = () => {
  // const { setIsAuthenticated } = useAuthContext();
  // const navigate = useNavigate();
  //
  // useEffect(() => {
  //   setIsAuthenticated(false);
  //   navigate('/sign-in');
  // }, [navigate, setIsAuthenticated]);

  return (
    <div className="dropdown">
      <Icon className="dropdown__icon" hrefIconName="#sign-out" />
      <p className="dropdown__text">Sign out</p>
    </div>
  );
};
