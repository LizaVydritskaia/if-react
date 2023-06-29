import React from 'react';
import classNames from 'classnames';

import { destinationsConfig } from './destinationsConfig';

import { Container } from '../Container';
import { Title } from '../Title';

import { useDestinationsStyles } from './Destinations.styles';

export const Destinations = () => {
  const classes = useDestinationsStyles();

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
            value="1"
            checked
          />
          <label className={classes.label} htmlFor="regions">
            Regions
          </label>
          <input
            className={classes.input}
            type="radio"
            id="cities"
            name="destinations"
            value="2"
          />
          <label className={classes.label} htmlFor="cities">
            Cities
          </label>
          <input
            className={classes.input}
            type="radio"
            id="places"
            name="destinations"
            value="3"
          />
          <label
            className={classNames(classes.label, classes.labelPlaces)}
            htmlFor="places"
          >
            Places <span>of interest</span>
          </label>
        </form>
        <div className={classes.countries}>
          {destinationsConfig.map((item) => {
            return (
              <div
                key={item.id}
                className={classNames(
                  'col-lg-3 col-md-6 col-sm-3',
                  classes.countryBlock,
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
        <div className={classes.circleArrow}>
          <div className={classes.arrow}></div>
        </div>
      </Container>
    </section>
  );
};
