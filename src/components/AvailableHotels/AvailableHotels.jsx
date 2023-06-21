import React, { Suspense } from 'react';
import { useSelector } from 'react-redux';

import { useAvailableHotelsContext } from '../../contexts/AvailableHotels.context';

import { getAvailableHotels } from '../../services/getAvailableHotels';

import { initialState } from '../../services/constants/initialState';

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
  const filterValues = useSelector((state) => state.filter);
  const formValues = useSelector((state) => state.form);

  const availableHotels =
    searchValues !== initialState.search
      ? getAvailableHotels({
          search: formValues.destinationValue,
          checkInOut: formValues.checkInOut,
          adults: filterValues.adults,
          children: formValues.childrenAges,
          rooms: filterValues.room,
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
