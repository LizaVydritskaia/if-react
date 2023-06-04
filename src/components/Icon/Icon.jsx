import React from 'react';

import './Icon.css';

export const Icon = ({ className, hrefIconName, ...props }) => {
  return (
    <svg className={className} {...props}>
      <use href={hrefIconName} />
    </svg>
  );
};
