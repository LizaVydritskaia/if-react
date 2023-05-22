import React from 'react';
import PropTypes from 'prop-types';

import './Icon.css';

export const Icon = ({ className, hrefIconName }) => {
  return (
    <svg className={className}>
      <use href={hrefIconName} />
    </svg>
  );
};

Icon.propTypes = {
  className: PropTypes.string,
  hrefIconName: PropTypes.string,
};
