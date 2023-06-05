import React, { useId } from 'react';
import { useNavigate } from 'react-router-dom';

import { Button } from '../Button';

import { useAuthContext } from '../../contexts/Auth.context';

import './SignInBlock.css';

export const SignInBlock = () => {
  const emailId = useId();
  const passwordId = useId();

  const { setIsAuthenticated } = useAuthContext();

  const navigate = useNavigate();

  const signIn = () => {
    setIsAuthenticated(true);
    navigate('/');
  };

  return (
    <div className="sign-in">
      <h2 className="sign-in__title">Sign in</h2>
      <form className="sign-in__form">
        <label className="sign-in__label" htmlFor={emailId}>
          Email address
        </label>
        <input className="sign-in__text-field" id={emailId} type="email" />
        <label className="sign-in__label" htmlFor={passwordId}>
          Password
        </label>
        <input
          className="sign-in__text-field"
          id={passwordId}
          type="password"
        />
        <Button type="button" className="sign-in__button" onClick={signIn}>
          Sign in
        </Button>
      </form>
    </div>
  );
};
