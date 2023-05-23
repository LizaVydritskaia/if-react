import React from 'react';

import './Input.css';

export const Input = ({
  id,
  className,
  labelClassName,
  type,
  name,
  value,
  placeholder,
  isDisabledInput,
  forId,
  labelContent,
  children,
  ...props
}) => (
  <>
    <input
      id={id}
      className={className}
      type={type}
      name={name}
      value={value}
      placeholder={placeholder}
      disabled={isDisabledInput}
      {...props}
    />
    <label htmlFor={forId} className={labelClassName}>
      {labelContent}
      {children}
    </label>
  </>
);
