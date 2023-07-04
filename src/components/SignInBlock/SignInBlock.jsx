import React, { useId } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { changeStatus } from '../../store/slices/auth.slice';
import { authStatuses } from '../../services/constants/authStatuses';

import { Button } from '../Button';

import './SignInBlock.css';

export const SignInBlock = () => {
  const emailId = useId();
  const passwordId = useId();

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const signIn = (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    const email = formData.get('email');
    const password = formData.get('password');

    if (email && password) {
      dispatch(changeStatus(authStatuses.loggedIn));
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
