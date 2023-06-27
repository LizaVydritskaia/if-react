import React, { Fragment } from 'react';

import { useGetHotelsQuery } from '../../services/hotels';

import { Arrow } from '../Arrow';
import { Container } from '../Container';
import { Hotel } from '../Hotel';
import { Loader } from '../Loader';
import { Title } from '../Title';

import './HomesGuestsLoves.css';

export const HomesGuestsLoves = () => {
  const { data: hotels = [], isLoading } = useGetHotelsQuery();

  return (
    <Loader loading={isLoading}>
      <section className="homes">
        <Container>
          <Title content="Homes guests loves" />
          <div className="homes__hotels">
            {hotels.map((hotel) => (
              <Fragment key={hotel.id}>
                <Hotel {...hotel} />
              </Fragment>
            ))}
            <Arrow />
          </div>
        </Container>
      </section>
    </Loader>
  );
};
