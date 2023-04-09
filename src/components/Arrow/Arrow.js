import React from 'react';
import classNames from 'classnames';

import './Arrow.css';

export const Arrow = ({ className }) => (
  <div className="circle-arrow">
    <div className={classNames('arrow', className)}></div>
  </div>
);
