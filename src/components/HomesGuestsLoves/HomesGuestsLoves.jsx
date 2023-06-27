import React, { Suspense } from 'react';

import { getHotels } from '../../services/getHotels';

import { Arrow } from '../Arrow';
import { Container } from '../Container';
import { Hotel } from '../Hotel';
import { Loader } from '../Loader';
import { Title } from '../Title';

import './HomesGuestsLoves.css';

export const HomesGuestsLoves = () => {
  const hotels = getHotels();

  return (
    <Suspense fallback={<Loader />}>
      <section className="homes">
        <Container>
          <Title content="Homes guests loves" />
          <div className="homes__hotels">
            <Hotel
              hotelsPromise={hotels}
              className="col-lg-3 col-md-6 col-sm-3"
            />
            <Arrow />
          </div>
        </Container>
      </section>
    </Suspense>
  );
};
