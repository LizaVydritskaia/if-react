import React from 'react';

//components
import { AvailableHotels } from '../AvailableHotels';
import { Footer } from '../Footer';
import { HomesGuestsLoves } from '../HomesGuestsLoves';
import { MainContent } from '../MainContent';
import { TopSection } from '../TopSection';

import { AvailableHotelsContextProvider } from '../../contexts/AvailableHotels.context';

export const App = () => {
  return (
    <>
      <MainContent>
        <AvailableHotelsContextProvider>
          <TopSection />
          <AvailableHotels />
        </AvailableHotelsContextProvider>
        <HomesGuestsLoves />
        <Footer />
      </MainContent>
    </>
  );
};
