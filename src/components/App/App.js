import React, { Suspense, useState } from 'react';

import { AvailableHotels } from '../AvailableHotels';
import { HomesGuestsLoves } from '../HomesGuestsLoves';
import { Loader } from '../Loader';
import { MainContent } from '../MainContent';
import { Sprite } from '../Sprite';
import { TopSection } from '../TopSection';

import { AvailableHotelsContextProvider } from '../../contexts/AvailableHotels.context';

export const App = () => {
  const [showAvailableHotels, setShowAvailableHotels] = useState(false);

  return (
    <>
      <Sprite />
      <MainContent>
        <AvailableHotelsContextProvider>
          <TopSection setShowAvailableHotels={setShowAvailableHotels} />
          <Suspense fallback={<Loader />}>
            <AvailableHotels showAvailableHotels={showAvailableHotels} />
          </Suspense>
        </AvailableHotelsContextProvider>
        <HomesGuestsLoves />
      </MainContent>
    </>
  );
};
