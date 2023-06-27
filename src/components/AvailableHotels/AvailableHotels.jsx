import React, { Suspense } from 'react';

//components
import { Arrow } from '../Arrow';
import { Container } from '../Container';
import { Hotel } from '../Hotel';
import { Loader } from '../Loader';
import { Title } from '../Title';

import { useAvailableHotelsContext } from '../../contexts/AvailableHotels.context';

import './AvailableHotels.css';

import { getAvailableHotels } from '../../services/getAvailableHotels';

export const AvailableHotels = () => {
  const { searchParams } = useAvailableHotelsContext();

  const availableHotels = searchParams
    ? getAvailableHotels(searchParams)
    : null;

  if (!availableHotels) {
    return null;
  }

  return (
    <Suspense fallback={<Loader />}>
      <section className="available-hotels">
        <Container>
          <Title content="Available hotels" />
          <div className="homes__hotels">
            <Hotel
              hotelsPromise={availableHotels}
              className="col-lg-3 col-md-6 col-sm-3"
            />
            <Arrow />
          </div>
        </Container>
      </section>
    </Suspense>
  );
};
