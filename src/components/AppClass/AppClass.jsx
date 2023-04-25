import React, { Component } from 'react';

import { AvailableHotelsClass } from '../AvailableHotelsClass';
import { HomesGuestsLovesClass } from '../HomesGuestsLovesClass';
import { MainContent } from '../MainContent';
import { Sprite } from '../Sprite';
import { TopSectionClass } from '../TopSectionClass';

export class AppClass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showAvailableHotelsBlock: false,
      availableHotels: [],
    };
  }

  render() {
    const { availableHotels, showAvailableHotelsBlock } = this.state;

    return (
      <>
        <Sprite />
        <MainContent>
          <TopSectionClass />
          <AvailableHotelsClass
            filteredArray={availableHotels}
            showAvailableHotelsBlock={showAvailableHotelsBlock}
          />
          <HomesGuestsLovesClass />
        </MainContent>
      </>
    );
  }
}
