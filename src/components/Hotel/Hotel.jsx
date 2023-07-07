import React from 'react';
import { NavLink } from 'react-router-dom';
import { useTheme } from 'react-jss';
import PropTypes from 'prop-types';
import classNames from 'classnames';

//styles
import { useHotelStyles } from './Hotel.styles';

export const Hotel = ({ className, id, name, city, country, imageUrl }) => {
  const theme = useTheme();
  const classes = useHotelStyles({ theme });

  return (
    <div className={classNames(classes.hotelBlock, className)}>
      <NavLink to={`/${id}`} state={{ name, city, country, imageUrl }}>
        <img className={classes.image} src={imageUrl} alt={name} />
        <p className={classes.name}>{name}</p>
      </NavLink>
      <p className={classes.location}>
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
