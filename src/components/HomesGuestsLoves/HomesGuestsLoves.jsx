import React from 'react';

import { Arrow } from '../Arrow';
import { Container } from '../Container';
import { Hotel } from '../Hotel';
import { Title } from '../Title';

import { hotelsData } from '../Hotel/config';

import './HomesGuestsLoves.css';

export const HomesGuestsLoves = () => (
  <section className="homes">
    <Container>
      <Title content="Homes guests loves" />
      <div className="homes__hotels">
        <Hotel
          hotelsDataArray={hotelsData}
          className="col-lg-3 col-md-6 col-sm-3"
        />
        <Arrow />
      </div>
    </Container>
  </section>
);
