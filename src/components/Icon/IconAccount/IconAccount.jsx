import React from 'react';
import { useLocation } from 'react-router-dom';
import classNames from 'classnames';

import './IconAccount.css';

export const IconAccount = ({ ...props }) => {
  const location = useLocation();

  return (
    <svg className="header__account" {...props}>
      <use
        className={classNames('header__account--logged-out', {
          'header__account--logged-in': location.pathname !== '/sign-in',
        })}
        href="#account"
      />
    </svg>
  );
};
