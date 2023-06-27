import { Button } from '../Button';
import { Input } from '../Input';
import React from 'react';

import { useCounterStyles } from './Counter.styles';

export const Counter = ({
  counterText,
  value,
  min,
  max,
  onClickMinusButton,
  onClickPlusButton,
}) => {
  const classes = useCounterStyles();

  return (
    <div className={classes.filterBlock}>
      <span className={classes.filterText}>{counterText}</span>
      <div className={classes.filterCounter}>
        <Button
          type="button"
          className={classes.filterButton}
          isDisabledButton={value === min}
          onClick={onClickMinusButton}
        >
          –
        </Button>
        <Input
          type="text"
          value={value}
          name="counter-value"
          className={classes.inputValue}
          isDisabledInput
        />
        <Button
          type="button"
          className={classes.filterButton}
          isDisabledButton={value === max}
          onClick={onClickPlusButton}
        >
          +
        </Button>
      </div>
    </div>
  );
};
