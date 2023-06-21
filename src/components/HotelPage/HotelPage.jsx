import React from 'react';
import { useLocation } from 'react-router-dom';

import { Container } from '../Container';
import { Footer } from '../Footer';
import { Header } from '../Header';

import './HotelPage.css';

export const HotelPage = () => {
  const location = useLocation();
  const { state } = location;

  return (
    <>
      <div className="header-wrap">
        <Header className="header__hotel-page" />
      </div>
      <Container>
        <section className="hotel-page">
          <img
            className="hotel-page__image"
            src={state.imageUrl}
            alt={state.name}
          />
          <div className="hotel-page__description">
            <p className="hotel-page__name">{state.name}</p>
            <p className="hotel-page__location">
              {state.city}, {state.country}
            </p>
          </div>
        </section>
      </Container>
      <Footer />
    </>
  );
};
