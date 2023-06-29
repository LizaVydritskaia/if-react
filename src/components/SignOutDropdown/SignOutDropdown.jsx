import React from 'react';
import PropTypes from 'prop-types';

import { Icon } from '../Icon';

import { useSignOutDropdownStyles } from './SignOutDropdown.styles';

export const SignOutDropdown = ({ showSignOutDropdown, ...props }) => {
  const classes = useSignOutDropdownStyles();

  return (
    showSignOutDropdown && (
      <div className={classes.dropdown} {...props}>
        <Icon className={classes.icon} hrefIconName="#sign-out" />
        <p className={classes.text}>Sign out</p>
      </div>
    )
  );
};

SignOutDropdown.propTypes = {
  showSignOutDropdown: PropTypes.bool,
};
