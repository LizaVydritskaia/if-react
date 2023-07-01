import React from 'react';

//components
import { Container } from '../Container';
import { Header } from '../Header';
import { TopSectionContent } from '../TopSectionContent';

//styles
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
