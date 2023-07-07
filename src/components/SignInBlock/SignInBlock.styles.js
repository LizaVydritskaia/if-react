import { createUseStyles } from 'react-jss';

export const signInBlockStyles = (theme) => ({
  signIn: {
    display: 'flex',
    flexDirection: 'column',
    width: 400,
    backgroundColor: theme.palette.form.background.general,
    border: `1px solid ${theme.palette.grey.secondary}`,
    margin: '0 auto',
  },
  title: {
    fontSize: 24,
    fontWeight: 500,
    color: theme.palette.grey.primary,
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
    color: theme.palette.grey.primary,
    marginBottom: 8,
  },
  textField: {
    height: 40,
    backgroundColor: theme.palette.form.background.general,
    border: `2px solid ${theme.palette.grey.secondary}`,
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
    backgroundColor: theme.palette.blue.accent,
    border: 'none',
    borderRadius: 8,
    marginBottom: 36,
    fontWeight: 500,
    fontSize: 24,
    color: theme.palette.text.main,
    cursor: 'pointer',
  },
});

export const useSignInBlockStyles = createUseStyles(signInBlockStyles, {
  name: 'SignInBlock',
});
