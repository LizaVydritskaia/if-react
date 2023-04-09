import React from 'react';

import { Arrow } from '../Arrow';
import { Container } from '../Container';
import { Hotel } from '../Hotel';
import { Title } from '../Title';

import './HomesGuestsLoves.css';

export const HomesGuestsLoves = () => (
  <section className="homes">
    <Container>
      <Title className="homes__title" content={'Homes guests loves'}></Title>
      <div className="homes__hotels">
        <Hotel className="col-lg-3 col-md-6 col-sm-3"></Hotel>
        <Arrow></Arrow>
      </div>
    </Container>
  </section>
);
