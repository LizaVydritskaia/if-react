import React from 'react';
import { useTheme } from 'react-jss';
import PropTypes from 'prop-types';

//components
import { Icon } from '../Icon';

//styles
import { useSignOutDropdownStyles } from './SignOutDropdown.styles';

export const SignOutDropdown = ({ showSignOutDropdown, ...props }) => {
  const theme = useTheme();
  const classes = useSignOutDropdownStyles({ theme });

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
