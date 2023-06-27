import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import { useArrowStyles } from './Arrow.styles';

export const Arrow = ({ className }) => {
  const classes = useArrowStyles();

  return (
    <div className={classes.circleArrow}>
      <div className={classNames(classes.arrow, className)}></div>
    </div>
  );
};

Arrow.propTypes = {
  className: PropTypes.string,
};
