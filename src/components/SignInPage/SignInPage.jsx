import React from 'react';

import { Header } from '../Header';
import { Container } from '../Container';
import { SignInBlock } from '../SignInBlock';

import './SignInPage.css';

export const SignInPage = () => {
  return (
    <section className="top-section">
      <Header />
      <Container className="sign-in__container">
        <SignInBlock />
      </Container>
    </section>
  );
};
