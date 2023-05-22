import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './Hotel.css';

export const Hotel = ({ hotelsDataArray, className }) =>
  hotelsDataArray.map(({ id, name, city, country, imageUrl }) => (
    <div key={id} className={classNames('homes__hotel-block', className)}>
      <img className="hotel-image" src={imageUrl} alt={name} />
      <p className="hotel-name">{name}</p>
      <p className="hotel-location">
        {city}, {country}
      </p>
    </div>
  ));

Hotel.propTypes = {
  hotelsDataArray: PropTypes.array,
  className: PropTypes.string,
};
