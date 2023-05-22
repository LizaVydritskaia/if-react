import React from 'react';
import PropTypes from 'prop-types';

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

Input.propTypes = {
  id: PropTypes.string,
  className: PropTypes.string,
  labelClassName: PropTypes.string,
  type: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.string,
  placeholder: PropTypes.string,
  isDisabledInput: PropTypes.bool,
  forId: PropTypes.string,
  labelContent: PropTypes.string,
};
