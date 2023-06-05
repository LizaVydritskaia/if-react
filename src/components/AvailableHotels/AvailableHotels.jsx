import React from 'react';
import PropTypes from 'prop-types';

import { Arrow } from '../Arrow';
import { Container } from '../Container';
import { Hotel } from '../Hotel';
import { Title } from '../Title';

import { useAvailableHotelsContext } from '../../contexts/AvailableHotels.context';

import './AvailableHotels.css';

export const AvailableHotels = ({ showAvailableHotels }) => {
  const { availableHotels } = useAvailableHotelsContext();

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

AvailableHotels.propTypes = {
  showAvailableHotels: PropTypes.bool,
};
