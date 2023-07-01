import React from 'react';
import { useLocation } from 'react-router-dom';
import { useTheme } from 'react-jss';
import classNames from 'classnames';

import { useIconAccountStyles } from './IconAccount.styles';

export const IconAccount = ({ ...props }) => {
  const theme = useTheme();
  const classes = useIconAccountStyles({ theme });

  const location = useLocation();

  return (
    <svg className={classes.account} {...props}>
      <use
        className={classNames(classes.loggedOut, {
          [classes.loggedIn]: location.pathname !== '/sign-in',
        })}
        href="#account"
      />
    </svg>
  );
};
