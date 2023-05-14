import React from 'react';

import { useHotels } from '../../hooks/useHotels';

import { Arrow } from '../Arrow';
import { Container } from '../Container';
import { Hotel } from '../Hotel';
import { Title } from '../Title';

import './HomesGuestsLoves.css';

export const HomesGuestsLoves = () => {
  const hotels = useHotels();

  return (
    <section className="homes">
      <Container>
        <Title content="Homes guests loves" />
        <div className="homes__hotels">
          <Hotel
            hotelsDataArray={hotels}
            className="col-lg-3 col-md-6 col-sm-3"
          />
          <Arrow />
        </div>
      </Container>
    </section>
  );
};
