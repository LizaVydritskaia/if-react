import React, { Suspense } from 'react';

//components
import { AvailableHotels } from '../AvailableHotels';
import { Footer } from '../Footer';
import { HomesGuestsLoves } from '../HomesGuestsLoves';
import { Loader } from '../Loader';
import { MainContent } from '../MainContent';
import { TopSection } from '../TopSection';

import { AvailableHotelsContextProvider } from '../../contexts/AvailableHotels.context';

export const App = () => {
  return (
    <>
      <MainContent>
        <AvailableHotelsContextProvider>
          <TopSection />
          <TopSection />
          <Suspense fallback={<Loader />}>
            <AvailableHotels />
          </Suspense>
        </AvailableHotelsContextProvider>
        <HomesGuestsLoves />
        <Footer />
      </MainContent>
    </>
  );
};
