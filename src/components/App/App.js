import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

//components
import { AvailableHotels } from '../AvailableHotels';
import { Footer } from '../Footer';
import { HomesGuestsLoves } from '../HomesGuestsLoves';
import { MainContent } from '../MainContent';
import { Offer } from '../Offer';
import { TopSection } from '../TopSection';

import { AvailableHotelsContextProvider } from '../../contexts/AvailableHotels.context';

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
        <Footer />
      </MainContent>
    </>
  );
};
