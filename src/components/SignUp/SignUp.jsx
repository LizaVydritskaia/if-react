import React from 'react';

import { Container } from '../Container';

import './SignUp.css';

export const SignUp = () => {
  return (
    <section className="sign-up">
      <Container>
        <div className="sign-up__content-wrapper">
          <div className="sign-up__mobile-logo">
            <svg className="sign-up__logo">
              <use href="#footer-logo" />
            </svg>
          </div>
          <div className="sign-up__circle">
            <svg className="sign-up__user">
              <use href="#user" />
            </svg>
          </div>
          <div className="sign-up__text-button">
            <p className="sign-up__text">
              Sign up <span>in the app</span> and get 20% off your first booking
            </p>
            <button className="sign-up__button" type="submit">
              Sign up
            </button>
          </div>
          <svg className="sign-up__close">
            <use href="#close" />
          </svg>
          <p className="sign-up__install">Install</p>
        </div>
      </Container>
    </section>
  );
};
