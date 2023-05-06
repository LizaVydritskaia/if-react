import React from 'react';

import './Input.css';

export const Input = ({
  id,
  className,
  labelClassName,
  type,
  name,
  placeholder,
  forId,
  labelContent,
  children,
  props,
}) => (
  <>
    <input
      id={id}
      className={className}
      type={type}
      name={name}
      placeholder={placeholder}
      {...props}
    />
    <label htmlFor={forId} className={labelClassName}>
      {labelContent}
      {children}
    </label>
  </>
);
