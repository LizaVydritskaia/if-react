import React, { Fragment } from 'react';
import { useSelector } from 'react-redux';
import { useTheme } from 'react-jss';

import { useAvailableHotelsContext } from '../../contexts/AvailableHotels.context';

import { useGetAvailableHotelsQuery } from '../../services/availableHotels';

//components
import { Arrow } from '../Arrow';
import { Container } from '../Container';
import { Hotel } from '../Hotel';
import { Loader } from '../Loader';
import { Title } from '../Title';

//styles
import { useAvailableHotelsStyles } from './AvailavleHotels.styles';
import { useHomesGuestsLovesStyles } from '../HomesGuestsLoves/HomesGuestsLoves.styles';

export const AvailableHotels = () => {
  const theme = useTheme();
  const classes = useAvailableHotelsStyles({ theme });
  const homesClasses = useHomesGuestsLovesStyles({ theme });

  const { availableHotelsRef, showAvailableHotels } =
    useAvailableHotelsContext();

  const filterValues = useSelector((state) => state.filter);
  const formValues = useSelector((state) => state.form);

  const { data: availableHotels = [], isLoading } = useGetAvailableHotelsQuery({
    search: formValues.destinationValue,
    checkInOut: formValues.checkInOut,
    adults: filterValues.adults,
    children: formValues.childrenAges,
    rooms: filterValues.room,
  });

  return (
    showAvailableHotels && (
      <Loader loading={isLoading}>
        <section className={classes.availableHotels} ref={availableHotelsRef}>
          <Container>
            <Title content="Available hotels" />
            <div className={homesClasses.hotels}>
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
