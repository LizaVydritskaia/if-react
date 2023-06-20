import React, { useId } from 'react';
import { useNavigate } from 'react-router-dom';

import { useAuthContext } from '../../contexts/Auth.context';

import { Button } from '../Button';

import './SignInBlock.css';

export const SignInBlock = () => {
  const emailId = useId();
  const passwordId = useId();

  const { setIsAuthenticated } = useAuthContext();

  const navigate = useNavigate();

  const signIn = (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData.entries());

    const { email, password } = data;

    if (email && password) {
      setIsAuthenticated(true);
      navigate('/');
    }
  };

  return (
    <div className="sign-in">
      <h2 className="sign-in__title">Sign in</h2>
      <form className="sign-in__form" onSubmit={signIn}>
        <label className="sign-in__label" htmlFor={emailId}>
          Email address
        </label>
        <input
          className="sign-in__text-field"
          id={emailId}
          type="email"
          name="email"
          required
        />
        <label className="sign-in__label" htmlFor={passwordId}>
          Password
        </label>
        <input
          className="sign-in__text-field"
          id={passwordId}
          type="password"
          name="password"
          required
        />
        <Button type="submit" className="sign-in__button">
          Sign in
        </Button>
      </form>
    </div>
  );
};
