import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

//context
import { AvailableHotelsContextProvider } from '../../contexts/AvailableHotels.context';

//components
import { AvailableHotels } from '../sections/AvailableHotels';
import { Footer } from '../sections/Footer';
import { Destinations } from '../sections/Destinations';
import { HomesGuestsLoves } from '../sections/HomesGuestsLoves';
import { MainContent } from '../MainContent';
import { Offer } from '../sections/Offer';
import { Reviews } from '../sections/Reviews';
import { SignUp } from '../SignUp';
import { TopSection } from '../sections/TopSection';

//styles
import { authStatuses } from '../../services/constants/authStatuses';

export const App = () => {
  const navigate = useNavigate();
  const loggedOut = useSelector(
    (state) => state.auth.status !== authStatuses.loggedIn,
  );

  useEffect(() => {
    if (loggedOut) {
      navigate('/sign-in');
    }
  }, [loggedOut, navigate]);

  return (
    <>
      <MainContent>
        <AvailableHotelsContextProvider>
          <TopSection />
          <AvailableHotels />
        </AvailableHotelsContextProvider>
        <Offer />
        <HomesGuestsLoves />
        <Destinations />
        <SignUp />
        <Reviews />
        <Footer />
      </MainContent>
    </>
  );
};
