import React from 'react';

import { destinationsConfig } from './destinationsConfig';

import { Container } from '../Container';
import { Title } from '../Title';

import './Destinations.css';

export const Destinations = () => {
  return (
    <section className="destinations">
      <Container>
        <Title content="The best destinations" />
        <form className="destinations__form" action="/">
          <input
            className="destinations__input"
            type="radio"
            id="regions"
            name="destinations"
            value="1"
            checked
          />
          <label className="destinations__label" htmlFor="regions">
            Regions
          </label>
          <input
            className="destinations__input"
            type="radio"
            id="cities"
            name="destinations"
            value="2"
          />
          <label className="destinations__label" htmlFor="cities">
            Cities
          </label>
          <input
            className="destinations__input"
            type="radio"
            id="places"
            name="destinations"
            value="3"
          />
          <label
            className="destinations__label destinations__label--places"
            htmlFor="places"
          >
            Places <span>of interest</span>
          </label>
        </form>
        <div className="destinations__countries">
          {destinationsConfig.map((item) => {
            return (
              <div
                key={item.id}
                className="col-lg-3 col-md-6 col-sm-3 destinations__country-block"
              >
                <div className="destinations__image-block">
                  <img
                    className="destinations__country-image"
                    src={item.image}
                    alt={item.country}
                  />
                  <div className="destinations__hover-block">
                    <button className="destinations__hover-button">
                      Book now
                    </button>
                  </div>
                </div>
                <p className="destinations__country">{item.country}</p>
              </div>
            );
          })}
        </div>
        <div className="destinations__circle-arrow">
          <div className="destinations__arrow"></div>
        </div>
      </Container>
    </section>
  );
};
