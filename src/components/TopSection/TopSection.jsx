import React from 'react';

import { Container } from '../Container';
import { Form } from '../Form';
import { Header } from '../Header';
import { Icon } from '../Icon';

import './TopSection.css';

export const TopSection = ({ setShowAvailableHotels }) => {
  return (
    <section className="top-section">
      <Header />
      <Container className="top-section__container">
        <h1 className="top-section__title">
          Discover stays
          <br />
          to live, work or just relax
        </h1>
        <Form setShowAvailableHotels={setShowAvailableHotels} />
        <div className="top-section__apps">
          <Icon
            className="top-section__apps--google-play"
            hrefIconName="#google-play"
          />
          <Icon
            className="top-section__apps--app-store"
            hrefIconName="#app-store"
          />
        </div>
      </Container>
    </section>
  );
};
