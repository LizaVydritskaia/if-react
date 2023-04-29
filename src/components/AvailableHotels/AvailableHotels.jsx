import React from 'react';

import { Arrow } from '../Arrow';
import { Container } from '../Container';
import { Hotel } from '../Hotel';
import { Title } from '../Title';

import './AvailableHotels.css';

import { availableHotelsData } from './config';

export const AvailableHotels = ({ searchParams, showAvailableHotels }) => {
  const filteredHotels = availableHotelsData.filter((hotel) => {
    return (
      hotel.name.toLowerCase().includes(searchParams) ||
      hotel.city.toLowerCase().includes(searchParams) ||
      hotel.country.toLowerCase().includes(searchParams)
    );
  });

  return (
    showAvailableHotels && (
      <section className="available-hotels">
        <Container>
          <Title content="Available hotels" />
          <div className="homes__hotels">
            <Hotel
              hotelsDataArray={filteredHotels}
              className="col-lg-3 col-md-6 col-sm-3"
            />
            <Arrow />
          </div>
        </Container>
      </section>
    )
  );
};
