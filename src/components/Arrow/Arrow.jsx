import React from 'react';
import { useTheme } from 'react-jss';
import PropTypes from 'prop-types';
import classNames from 'classnames';

//styles
import { useArrowStyles } from './Arrow.styles';

export const Arrow = ({ className }) => {
  const theme = useTheme();
  const classes = useArrowStyles({ theme });

  return (
    <div className={classes.circleArrow}>
      <div className={classNames(classes.arrow, className)}></div>
    </div>
  );
};

Arrow.propTypes = {
  className: PropTypes.string,
};
