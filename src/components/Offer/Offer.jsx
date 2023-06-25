import React from 'react';

import { offerConfig } from './offerConfig';

import { Container } from '../Container';

import './Offer.css';

export const Offer = () => {
  return (
    <section className="offer">
      <Container>
        <h2 className="offer__title">What do we offer</h2>
        <div className="offer__icons">
          {offerConfig.map((item) => {
            return (
              <div
                key={item.id}
                className="col-lg-3 col-md-6 col-sm-4 offer__icon-block"
              >
                <div className="offer__icon-block--icon">
                  <svg className="offer__icon-block--icon-support">
                    <use href={item.icon} />
                  </svg>
                </div>
                <p className="offer__icon-block--text">{item.text}</p>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
};
