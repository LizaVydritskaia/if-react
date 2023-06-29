import React, { Fragment } from 'react';

import { useGetHotelsQuery } from '../../services/hotels';

import { Arrow } from '../Arrow';
import { Container } from '../Container';
import { Hotel } from '../Hotel';
import { Loader } from '../Loader';
import { Title } from '../Title';

import { useHomesGuestsLovesStyles } from './HomesGuestsLoves.styles';

export const HomesGuestsLoves = () => {
  const classes = useHomesGuestsLovesStyles();

  const { data: hotels = [], isLoading } = useGetHotelsQuery();

  return (
    <Loader loading={isLoading}>
      <section className={classes.root}>
        <Container>
          <Title content="Homes guests loves" />
          <div className={classes.hotels}>
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
