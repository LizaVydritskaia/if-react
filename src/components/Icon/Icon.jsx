import React from 'react';
import PropTypes from 'prop-types';

import './Icon.css';

export const Icon = ({ className, hrefIconName, ...props }) => {
  return (
    <svg className={className} {...props}>
      <use href={hrefIconName} />
    </svg>
  );
};

Icon.propTypes = {
  className: PropTypes.string,
  hrefIconName: PropTypes.string,
};
