import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import { wrapPromise } from '../../helpers/wrapPromise';

import './Hotel.css';

export const Hotel = ({ hotelsPromise, className }) => {
  const hotels = wrapPromise(hotelsPromise);

  return hotels.map(({ id, name, city, country, imageUrl }) => (
    <div key={id} className={classNames('homes__hotel-block', className)}>
      <NavLink to={`/${id}`} state={{ name, city, country, imageUrl }}>
        <img className="hotel-image" src={imageUrl} alt={name} />
        <p className="hotel-name">{name}</p>
      </NavLink>
      <p className="hotel-location">
        {city}, {country}
      </p>
    </div>
  ));
};

Hotel.propTypes = {
  className: PropTypes.string,
};
