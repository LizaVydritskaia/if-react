import React, { useState } from 'react';

import { AvailableHotels } from '../AvailableHotels';
import { HomesGuestsLoves } from '../HomesGuestsLoves';
import { MainContent } from '../MainContent';
import { Sprite } from '../Sprite';
import { TopSection } from '../TopSection';

export const App = () => {
  const [showAvailableHotels, setShowAvailableHotels] = useState(false);
  const [searchParams, setSearchParams] = useState('');

  return (
    <>
      <Sprite />
      <MainContent>
        <TopSection
          setSearchParams={setSearchParams}
          setShowAvailableHotels={setShowAvailableHotels}
        />
        <AvailableHotels
          searchParams={searchParams}
          showAvailableHotels={showAvailableHotels}
        />
        <HomesGuestsLoves />
      </MainContent>
    </>
  );
};
