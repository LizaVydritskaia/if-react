import React from 'react';

import './Button.css';

export const Button = ({ className, type, children, onClick }) => (
  <button className={className} type={type} onClick={onClick}>
    {children}
  </button>
);
