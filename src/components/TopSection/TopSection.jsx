import React from 'react';

import { Container } from '../Container';
import { Header } from '../Header';
import { TopSectionContent } from '../TopSectionContent';

import { useTopSectionStyles } from './TopSection.styles';

export const TopSection = () => {
  const classes = useTopSectionStyles();

  return (
    <section className={classes.root}>
      <Header />
      <Container className={classes.container}>
        <TopSectionContent />
      </Container>
    </section>
  );
};
