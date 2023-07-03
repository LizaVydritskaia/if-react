import { createUseStyles } from 'react-jss';

export const signInPageStyles = {
  signInContainer: {
    padding: '202px 0 268px',
  },
};

export const useSignInPageStyles = createUseStyles(signInPageStyles, {
  name: 'SignInPage',
});
