import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

//context
import { AvailableHotelsContextProvider } from '../../contexts/AvailableHotels.context';

//components
import { AvailableHotels } from '../AvailableHotels';
import { Footer } from '../Footer';
import { Destinations } from '../Destinations';
import { HomesGuestsLoves } from '../HomesGuestsLoves';
import { MainContent } from '../MainContent';
import { Offer } from '../Offer';
import { Reviews } from '../Reviews/Reviews';
import { SignUp } from '../SignUp';
import { TopSection } from '../TopSection';

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
