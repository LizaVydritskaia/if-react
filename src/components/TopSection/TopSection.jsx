import React from 'react';

import { Container } from '../Container';
import { Header } from '../Header';
import { TopSectionContent } from '../TopSectionContent';

import './TopSection.css';

export const TopSection = () => {
  return (
    <section className="top-section">
      <Header />
      <Container className="top-section__container">
        <TopSectionContent />
      </Container>
    </section>
  );
};
