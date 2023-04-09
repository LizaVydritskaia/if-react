import React from 'react';
import classNames from 'classnames';

import { hotelsData } from './config';

import './Hotel.css';

export const Hotel = ({ className }) =>
  hotelsData.map(({ id, name, city, country, imageUrl }) => {
    return (
      <div key={id} className={classNames('homes__hotel-block', className)}>
        <img className="homes__hotels-image" src={imageUrl} alt={name} />
        <p className="homes__hotel-name">{name}</p>
        <p className="homes__hotel-location">
          {city}, {country}
        </p>
      </div>
    );
  });
