import React from 'react';
import { useTheme } from 'react-jss';
import PropTypes from 'prop-types';

//components
import { Button } from '../Button';
import { Input } from '../Input';

//styles
import { useCounterStyles } from './Counter.styles';

export const Counter = ({
  counterText,
  value,
  min,
  max,
  onClickMinusButton,
  onClickPlusButton,
}) => {
  const theme = useTheme();
  const classes = useCounterStyles({ theme });

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

Counter.propTypes = {
  counterText: PropTypes.string,
  value: PropTypes.number,
  min: PropTypes.number,
  max: PropTypes.number,
  onClickMinusButton: PropTypes.func,
  onClickPlusButton: PropTypes.func,
};
