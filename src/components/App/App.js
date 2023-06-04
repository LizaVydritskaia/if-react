import React from 'react';

import { AvailableHotels } from '../AvailableHotels';
import { Footer } from '../Footer';
import { HomesGuestsLoves } from '../HomesGuestsLoves';
import { MainContent } from '../MainContent';
import { TopSection } from '../TopSection';

import { AvailableHotelsContextProvider } from '../../contexts/AvailableHotels.context';
import { AuthContextProvider } from '../../contexts/Auth.context';

export const App = () => {
  return (
    <>
      <AuthContextProvider>
        <MainContent>
          <AvailableHotelsContextProvider>
            <TopSection />
            <AvailableHotels />
          </AvailableHotelsContextProvider>
          <HomesGuestsLoves />
          <Footer />
        </MainContent>
      </AuthContextProvider>
    </>
  );
};
