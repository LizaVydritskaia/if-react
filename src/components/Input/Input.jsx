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
  content,
  children,
  onChange,
}) => (
  <>
    <input
      id={id}
      className={className}
      type={type}
      name={name}
      placeholder={placeholder}
      onChange={onChange}
    />
    <label htmlFor={forId} className={labelClassName}>
      {content}
      {children}
    </label>
  </>
);
