import React, { Suspense } from 'react';
import { useSelector } from 'react-redux';

import { initialState } from '../../services/constants/initialState';

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

  const formValues = useSelector((state) => state.form);

  const availableHotels =
    formValues !== initialState.form
      ? getAvailableHotels({
          search: formValues.destinationValue,
          checkInOut: formValues.checkInOut,
          adults: formValues.adults,
          children: formValues.childrenAges,
          rooms: formValues.room,
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
