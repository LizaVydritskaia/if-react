import React, { useState } from 'react';

import { AvailableHotels } from '../AvailableHotels';
import { HomesGuestsLoves } from '../HomesGuestsLoves';
import { MainContent } from '../MainContent';
import { Sprite } from '../Sprite';
import { TopSection } from '../TopSection';

export const App = () => {
  const [showAvailableHotels, setShowAvailableHotels] = useState(false);
  const [availableHotels, setAvailableHotels] = useState([]);

  return (
    <>
      <Sprite />
      <MainContent>
        <TopSection
          setAvailableHotels={setAvailableHotels}
          setShowAvailableHotels={setShowAvailableHotels}
        />
        <AvailableHotels
          showAvailableHotels={showAvailableHotels}
          filteredArray={availableHotels}
        />
        <HomesGuestsLoves />
      </MainContent>
    </>
  );
};
