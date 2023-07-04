import { createUseStyles } from 'react-jss';

export const signUpStyles = (theme) => ({
  root: {
    order: 4,
    backgroundColor: theme.palette.background.general,
  },
  signUp: {
    width: '100%',
    maxWidth: 1232,
    backgroundColor: theme.palette.background.secondary,
    padding: '51px 24px 52px',
    margin: '0 auto',
    position: 'relative',
  },
  contentWrapper: {
    display: 'flex',
    alignItems: 'center',
  },
  circle: {
    width: 86,
    height: 86,
    borderRadius: '50%',
    backgroundColor: theme.palette.form.background.general,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  user: {
    width: 50,
    height: 44,
  },
  textButton: {
    marginLeft: 24,
  },
  text: {
    fontWeight: 500,
    fontSize: 24,
    color: theme.palette.text.dark,
    marginBottom: 20,

    '& span': {
      display: 'none',
    },
  },
  button: {
    width: '100%',
    maxWidth: 128,
    height: 48,
    backgroundColor: theme.palette.form.background.general,
    border: `1px solid ${theme.palette.blue.accent}`,
    borderRadius: 8,
    fontWeight: 400,
    fontSize: 18,
    color: theme.palette.blue.accent,

    '&:hover': {
      cursor: 'pointer',
    },
  },
  close: {
    width: 26,
    height: 26,
    position: 'absolute',
    top: 24,
    right: 24,

    '&:hover': {
      cursor: 'pointer',
    },
  },
  logo: {
    width: 0,
    height: 0,
  },
  install: {
    opacity: 0,
  },
});

export const useSignUpStyles = createUseStyles(signUpStyles, {
  name: 'SignUp',
});
