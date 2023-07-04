import React, { useState } from 'react';
import { useTheme } from 'react-jss';
import classNames from 'classnames';

//configs
import { citiesConfig } from './citiesConfig';
import { placesConfig } from './placesConfig';
import { regionsConfig } from './regionsConfig';

//components
import { Container } from '../Container';
import { Title } from '../Title';

//styles
import { useDestinationsStyles } from './Destinations.styles';

export const Destinations = () => {
  const theme = useTheme();
  const classes = useDestinationsStyles({ theme });

  const [destination, setDestination] = useState('regions');
  const [hideCountryBlock, setHideCountryBlock] = useState(true);

  const handleDestinationChange = (event) => {
    setDestination(event.target.value);
  };

  const handleToggleVisibility = () => {
    setHideCountryBlock((prevState) => !prevState);
  };

  return (
    <section className={classes.root}>
      <Container>
        <Title content="The best destinations" />
        <form className={classes.form} action="/">
          <input
            className={classes.input}
            type="radio"
            id="regions"
            name="destinations"
            value="regions"
            checked={destination === 'regions'}
            onChange={handleDestinationChange}
          />
          <label className={classes.label} htmlFor="regions">
            Regions
          </label>
          <input
            className={classes.input}
            type="radio"
            id="cities"
            name="destinations"
            value="cities"
            checked={destination === 'cities'}
            onChange={handleDestinationChange}
          />
          <label className={classes.label} htmlFor="cities">
            Cities
          </label>
          <input
            className={classes.input}
            type="radio"
            id="places"
            name="destinations"
            value="places"
            checked={destination === 'places'}
            onChange={handleDestinationChange}
          />
          <label
            className={classNames(classes.label, classes.labelPlaces)}
            htmlFor="places"
          >
            Places <span>of interest</span>
          </label>
        </form>
        <div className={classes.countries}>
          {(destination === 'regions'
            ? regionsConfig
            : destination === 'cities'
            ? citiesConfig
            : placesConfig
          ).map((item) => {
            return (
              <div
                key={item.id}
                className={classNames(
                  'col-lg-3 col-md-6 col-sm-3',
                  hideCountryBlock
                    ? classes.countryBlockHidden
                    : classes.countryBlock,
                )}
              >
                <div className={classes.imageBlock}>
                  <img
                    className={classes.countryImage}
                    src={item.image}
                    alt={item.country}
                  />
                  <div className={classes.hoverBlock}>
                    <button className={classes.hoverButton}>Book now</button>
                  </div>
                </div>
                <p className={classes.country}>{item.country}</p>
              </div>
            );
          })}
        </div>
        <div className={classes.circleArrow} onClick={handleToggleVisibility}>
          <div
            className={
              hideCountryBlock ? classes.arrowHiddenBlock : classes.arrow
            }
          ></div>
        </div>
      </Container>
    </section>
  );
};
