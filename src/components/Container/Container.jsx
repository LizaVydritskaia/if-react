import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

//styles
import { useContainerStyles } from './Container.styles';

export const Container = ({ children, className }) => {
  const classes = useContainerStyles();

  return (
    <div className={classNames(classes.container, className)}>{children}</div>
  );
};

Container.propTypes = {
  className: PropTypes.string,
};
