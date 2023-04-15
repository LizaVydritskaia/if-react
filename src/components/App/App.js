import React, { useState } from 'react';

//components
import { AvailableHotels } from '../AvailableHotels';
import { Container } from '../Container';
import { Form } from '../Form';
import { Header } from '../Header';
import { HomesGuestsLoves } from '../HomesGuestsLoves';
import { MainContent } from '../MainContent';
import { Sprite } from '../Sprite';

//icons
import { AppStore, GooglePlay } from '../../assets/icons';

//styles
import './App.css';

export const App = () => {
  const [showAvailableHotels, setShowAvailableHotels] = useState('none');
  const [availableHotels, setAvailableHotels] = useState([]);

  return (
    <>
      <Sprite />
      <MainContent>
        <section className="top-section">
          <Header />
          <Container className="top-section__container">
            <h1 className="top-section__title">
              Discover stays
              <br />
              to live, work or just relax
            </h1>
            <Form
              setShowAvailableHotels={setShowAvailableHotels}
              setAvailableHotels={setAvailableHotels}
            />
            <div className="top-section__apps">
              <GooglePlay />
              <AppStore />
            </div>
          </Container>
        </section>
        <AvailableHotels
          filteredArray={availableHotels}
          displayStyle={{ display: showAvailableHotels }}
        />
        <HomesGuestsLoves />
      </MainContent>
    </>
  );
};
