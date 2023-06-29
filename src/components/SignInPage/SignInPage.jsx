import React from 'react';

//components
import { Header } from '../Header';
import { Container } from '../Container';
import { SignInBlock } from '../SignInBlock';

//styles
import { useTopSectionStyles } from '../TopSection/TopSection.styles';
import { useSignInPageStyles } from './SignInPage.styles';

export const SignInPage = () => {
  const topSectionClasses = useTopSectionStyles();
  const classes = useSignInPageStyles();

  return (
    <section className={topSectionClasses.root}>
      <Header />
      <Container className={classes.signInContainer}>
        <SignInBlock />
      </Container>
    </section>
  );
};
