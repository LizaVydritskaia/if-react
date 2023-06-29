import { createUseStyles } from 'react-jss';

export const signInBlockStyles = () => ({
  signIn: {
    display: 'flex',
    flexDirection: 'column',
    width: 400,
    backgroundColor: 'var(--text-general-white)',
    border: '1px solid #cecece',
    margin: '0 auto',
  },
  title: {
    fontSize: 24,
    fontWeight: 500,
    color: 'var(--dark-gray)',
    padding: '36px 0 40px',
    margin: '0 auto',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    width: 320,
    margin: '0 auto',
  },
  label: {
    fontSize: 16,
    lineHeight: '19px',
    color: 'var(--dark-gray)',
    marginBottom: 8,
  },
  textField: {
    height: 41,
    background: 'var(--text-general-white)',
    border: '2px solid var(--light-gray)',
    borderRadius: 8,
    padding: '0 16px',
    marginBottom: 16,

    '&:last-of-type': {
      marginBottom: 24,
    },
  },
  button: {
    maxWidth: 320,
    height: 48,
    background: 'var(--accent-blue)',
    border: 'none',
    borderRadius: 8,
    marginBottom: 36,
    fontWeight: 500,
    fontSize: 24,
    color: 'var(--text-general-white)',
    cursor: 'pointer',
  },
});

export const useSignInBlockStyles = createUseStyles(signInBlockStyles, {
  name: 'SignInBlock',
});
