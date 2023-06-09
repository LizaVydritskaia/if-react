import React from 'react';
import PropTypes from 'prop-types';

import { Icon } from '../Icon';

import './SignOutDropdown.css';

export const SignOutDropdown = ({ showSignOutDropdown, ...props }) => {
  return (
    showSignOutDropdown && (
      <div className="dropdown" {...props}>
        <Icon className="dropdown__icon" hrefIconName="#sign-out" />
        <p className="dropdown__text">Sign out</p>
      </div>
    )
  );
};

SignOutDropdown.propTypes = {
  showSignOutDropdown: PropTypes.bool,
};
