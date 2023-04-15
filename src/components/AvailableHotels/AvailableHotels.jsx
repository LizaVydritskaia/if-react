import React from 'react';

import { Arrow } from '../Arrow';
import { Container } from '../Container';
import { Hotel } from '../Hotel';
import { Title } from '../Title';

import './AvailableHotels.css';

export const AvailableHotels = ({ filteredArray, displayStyle }) => {
  return (
    <section className="available-hotels" style={displayStyle}>
      <Container>
        <Title content="Available hotels" />
        <div className="homes__hotels">
          <Hotel
            hotelsDataArray={filteredArray}
            className="col-lg-3 col-md-6 col-sm-3"
          />
          <Arrow />
        </div>
      </Container>
    </section>
  );
};
