import React from 'react';
import PropTypes from 'prop-types';

import './Button.css';

export const Button = ({ className, type, children, onClick }) => (
  <button className={className} type={type} onClick={onClick}>
    {children}
  </button>
);

Button.propTypes = {
  className: PropTypes.string,
  type: PropTypes.string,
  onClick: PropTypes.func,
};
