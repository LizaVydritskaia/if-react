import React from 'react';

import { Arrow } from '../Arrow';
import { Container } from '../Container';
import { Hotel } from '../Hotel';
import { Title } from '../Title';

import { useAvailableHotelsContext } from '../../contexts/AvailableHotels.context';

import './AvailableHotels.css';

export const AvailableHotels = () => {
  const { availableHotels, showAvailableHotels } = useAvailableHotelsContext();

  return (
    showAvailableHotels && (
      <section className="available-hotels">
        <Container>
          <Title content="Available hotels" />
          <div className="homes__hotels">
            <Hotel
              hotelsDataArray={availableHotels}
              className="col-lg-3 col-md-6 col-sm-3"
            />
            <Arrow />
          </div>
        </Container>
      </section>
    )
  );
};
