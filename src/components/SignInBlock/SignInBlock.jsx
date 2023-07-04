import React, { useId } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useTheme } from 'react-jss';

//slices
import { changeStatus } from '../../store/slices/auth.slice';

//constants
import { authStatuses } from '../../services/constants/authStatuses';

//components
import { Button } from '../Button';

//styles
import { useSignInBlockStyles } from './SignInBlock.styles';

export const SignInBlock = () => {
  const theme = useTheme();
  const classes = useSignInBlockStyles({ theme });

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
    <div className={classes.signIn}>
      <h2 className={classes.title}>Sign in</h2>
      <form className={classes.form} onSubmit={signIn}>
        <label className={classes.label} htmlFor={emailId}>
          Email address
        </label>
        <input
          className={classes.textField}
          name="email"
          id={emailId}
          type="email"
          name="email"
          required
        />
        <label className={classes.label} htmlFor={passwordId}>
          Password
        </label>
        <input
          className={classes.textField}
          name="password"
          id={passwordId}
          type="password"
          name="password"
          required
        />
        <Button type="submit" className={classes.button}>
          Sign in
        </Button>
      </form>
    </div>
  );
};
