import { createUseStyles } from 'react-jss';

export const counterStyles = (theme) => ({
  filterBlock: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,

    '&:nth-child(3)': {
      marginBottom: 0,
    },
  },
  filterText: {
    fontSize: 16,
    color: theme.palette.grey.primary,
  },
  filterCounter: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  filterButton: {
    width: 30,
    height: 30,
    border: `1px solid ${theme.palette.blue.accent}`,
    fontSize: 18,
    fontWeight: 400,
    color: theme.palette.blue.accent,
    backgroundColor: theme.palette.form.background.general,
    padding: '5px 9px',
    userSelect: 'none',

    '&:hover': {
      cursor: 'pointer',
    },
    '&:disabled': {
      border: `1px solid ${theme.palette.grey.secondary}`,
      color: theme.palette.grey.secondary,
    },
    '&:disabled:hover': {
      cursor: 'default',
    },
  },
  inputValue: {
    width: 48,
    backgroundColor: theme.palette.form.background.general,
    border: 'none',
    fontSize: 16,
    textAlign: 'center',
  },
});

export const useCounterStyles = createUseStyles(counterStyles, {
  name: 'Counter',
});
