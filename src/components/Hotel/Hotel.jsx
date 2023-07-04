import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './Hotel.css';

export const Hotel = ({ className, id, name, city, country, imageUrl }) => {
  return (
    <div className={classNames('homes__hotel-block', className)}>
      <NavLink to={`/${id}`} state={{ name, city, country, imageUrl }}>
        <img className="hotel-image" src={imageUrl} alt={name} />
        <p className="hotel-name">{name}</p>
      </NavLink>
      <p className="hotel-location">
        {city}, {country}
      </p>
    </div>
  );
};

Hotel.propTypes = {
  className: PropTypes.string,
  id: PropTypes.string,
  name: PropTypes.string,
  city: PropTypes.string,
  country: PropTypes.string,
  imageUrl: PropTypes.string,
};
