import { createUseStyles } from 'react-jss';

export const signUpStyles = () => ({
  root: {
    width: '100%',
    maxWidth: 1232,
    backgroundColor: 'var(--background-color)',
    padding: '51px 24px 52px',
    margin: '0 auto',
    position: 'relative',
    order: 4,
  },
  contentWrapper: {
    display: 'flex',
    alignItems: 'center',
  },
  circle: {
    width: 86,
    height: 86,
    borderRadius: '50%',
    backgroundColor: 'var(--text-general-white)',
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
    color: 'var(--text-primary-color)',
    marginBottom: 20,

    '& span': {
      display: 'none',
    },
  },
  button: {
    width: '100%',
    maxWidth: 128,
    height: 48,
    backgroundColor: 'var(--text-general-white)',
    border: '1px solid var(--accent-blue)',
    borderRadius: 8,
    fontWeight: 400,
    fontSize: 18,
    color: 'var(--accent-blue)',
  },
  close: {
    width: 26,
    height: 26,
    position: 'absolute',
    top: 24,
    right: 24,
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
