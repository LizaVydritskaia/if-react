import React from 'react';
import PropTypes from 'prop-types';

import { Button } from '../Button';
import { Input } from '../Input';

import './Counter.css';

export const Counter = ({
  counterText,
  value,
  min,
  max,
  onClickMinusButton,
  onClickPlusButton,
}) => {
  return (
    <div className="top-section__filter-block">
      <span className="top-section__filter-text">{counterText}</span>
      <div className="top-section__filter-counter">
        <Button
          type="button"
          className="top-section__filter-button"
          isDisabledButton={value === min}
          onClick={onClickMinusButton}
        >
          –
        </Button>
        <Input
          type="text"
          value={value}
          name="counter-value"
          className="top-section__input-value"
          isDisabledInput
        />
        <Button
          type="button"
          className="top-section__filter-button"
          isDisabledButton={value === max}
          onClick={onClickPlusButton}
        >
          +
        </Button>
      </div>
    </div>
  );
};

Counter.propTypes = {
  counterText: PropTypes.string,
  value: PropTypes.number,
  min: PropTypes.number,
  max: PropTypes.number,
  onClickMinusButton: PropTypes.func,
  onClickPlusButton: PropTypes.func,
};
