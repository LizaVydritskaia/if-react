import React from 'react';
import { NavLink } from 'react-router-dom';
import classNames from 'classnames';

import './Hotel.css';

export const Hotel = ({ hotelsDataArray, className }) =>
  hotelsDataArray.map(({ id, name, city, country, imageUrl }) => (
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
