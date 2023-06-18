import React, { Suspense } from 'react';
import { useSelector } from 'react-redux';

import { useAvailableHotelsContext } from '../../contexts/AvailableHotels.context';

import { getAvailableHotels } from '../../services/getAvailableHotels';

//components
import { Arrow } from '../Arrow';
import { Container } from '../Container';
import { Hotel } from '../Hotel';
import { Loader } from '../Loader';
import { Title } from '../Title';

import './AvailableHotels.css';

export const AvailableHotels = () => {
  const { availableHotelsRef } = useAvailableHotelsContext();

  const searchValues = useSelector((state) => state.search);

  const availableHotels = searchValues
    ? getAvailableHotels({
        search: searchValues.destinationValue,
        checkInOut: searchValues.calendarValue,
        adults: searchValues.adultsCount,
        children: searchValues.childrenAges,
        rooms: searchValues.roomsCount,
      })
    : null;

  if (!availableHotels) {
    return null;
  }

  return (
    <Suspense fallback={<Loader />}>
      <section className="available-hotels" ref={availableHotelsRef}>
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
