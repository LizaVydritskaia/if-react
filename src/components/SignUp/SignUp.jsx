import React from 'react';

import { Container } from '../Container';

import { useSignUpStyles } from './SignUp.styles';

export const SignUp = () => {
  const classes = useSignUpStyles();

  return (
    <section className={classes.root}>
      <Container>
        <div className={classes.contentWrapper}>
          <div className="sign-up__mobile-logo">
            <svg className={classes.logo}>
              <use href="#footer-logo" />
            </svg>
          </div>
          <div className={classes.circle}>
            <svg className={classes.user}>
              <use href="#user" />
            </svg>
          </div>
          <div className={classes.textButton}>
            <p className={classes.text}>
              Sign up <span>in the app</span> and get 20% off your first booking
            </p>
            <button className={classes.button} type="submit">
              Sign up
            </button>
          </div>
          <svg className={classes.close}>
            <use href="#close" />
          </svg>
          <p className={classes.install}>Install</p>
        </div>
      </Container>
    </section>
  );
};
