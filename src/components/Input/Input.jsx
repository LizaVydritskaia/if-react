import React, { memo } from 'react';
import PropTypes from 'prop-types';

export const Input = memo(function Input({
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
  onChange,
  ...props
}) {
  return (
    <>
      <input
        id={id}
        className={className}
        type={type}
        name={name}
        value={value}
        placeholder={placeholder}
        disabled={isDisabledInput}
        onChange={onChange}
        {...props}
      />
      <label htmlFor={forId} className={labelClassName}>
        {labelContent}
        {children}
      </label>
    </>
  );
});

Input.propTypes = {
  id: PropTypes.string,
  className: PropTypes.string,
  labelClassName: PropTypes.string,
  type: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.number,
  placeholder: PropTypes.string,
  isDisabledInput: PropTypes.bool,
  forId: PropTypes.string,
  labelContent: PropTypes.string,
};
