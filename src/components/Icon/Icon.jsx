import React from 'react';
import PropTypes from 'prop-types';

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
