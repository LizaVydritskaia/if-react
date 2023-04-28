import React, { useState } from 'react';

import { Sprite } from '../Sprite';
import { MainContent } from '../MainContent';
import { TopSection } from '../TopSection';
import { AvailableHotelsClass } from '../AvailableHotelsClass';
import { HomesGuestsLovesClass } from '../HomesGuestsLovesClass';

export const App = () => {
  const [searchParams, setSearchParams] = useState('');
  const [showAvailableHotelsBlock, setShowAvailableHotelsBlock] =
    useState(false);

  return (
    <>
      <Sprite />
      <MainContent>
        <TopSection
          setSearchParams={setSearchParams}
          setShowAvailableHotelsBlock={setShowAvailableHotelsBlock}
        />
        <AvailableHotelsClass
          searchParams={searchParams}
          showAvailableHotelsBlock={showAvailableHotelsBlock}
        />
        <HomesGuestsLovesClass />
      </MainContent>
    </>
  );
};
