import React, { Fragment } from 'react';
import { useSelector } from 'react-redux';

import { useAvailableHotelsContext } from '../../contexts/AvailableHotels.context';

import { useGetAvailableHotelsQuery } from '../../services/availableHotels';

//components
import { Arrow } from '../Arrow';
import { Container } from '../Container';
import { Hotel } from '../Hotel';
import { Loader } from '../Loader';
import { Title } from '../Title';

import './AvailableHotels.css';

export const AvailableHotels = () => {
  const { availableHotelsRef, showAvailableHotels } =
    useAvailableHotelsContext();

  const formValues = useSelector((state) => state.form);

  const { data: availableHotels = [], isLoading } = useGetAvailableHotelsQuery({
    search: formValues.destinationValue,
    checkInOut: formValues.checkInOut,
    adults: formValues.adults,
    children: formValues.childrenAges,
    rooms: formValues.room,
  });

  return (
    showAvailableHotels && (
      <Loader loading={isLoading}>
        <section className="available-hotels" ref={availableHotelsRef}>
          <Container>
            <Title content="Available hotels" />
            <div className="homes__hotels">
              {availableHotels.map((hotel) => (
                <Fragment key={hotel.id}>
                  <Hotel {...hotel} />
                </Fragment>
              ))}
              <Arrow />
            </div>
          </Container>
        </section>
      </Loader>
    )
  );
};
