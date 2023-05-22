import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './Arrow.css';

export const Arrow = ({ className }) => (
  <div className="circle-arrow">
    <div className={classNames('arrow', className)}></div>
  </div>
);

Arrow.propTypes = {
  className: PropTypes.string,
};
