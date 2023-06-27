import { createUseStyles } from 'react-jss';

export const counterStyles = () => ({
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
    color: 'var(--dark-gray)',
  },
  filterCounter: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  filterButton: {
    width: 30,
    height: 30,
    border: '1px solid var(--accent-blue)',
    fontSize: 18,
    fontWeight: 400,
    color: 'var(--accent-blue)',
    backgroundColor: 'var(--text-general-white)',
    padding: '5px 9px',
    userSelect: 'none',

    '&:hover': {
      cursor: 'pointer',
    },
    '&:disabled': {
      border: '1px solid var(--light-gray)',
      color: 'var(--light-gray)',
    },
    '&:disabled:hover': {
      cursor: 'default',
    },
  },
  inputValue: {
    width: 48,
    backgroundColor: 'var(--text-general-white)',
    border: 'none',
    fontSize: 16,
    textAlign: 'center',
  },
});

export const useCounterStyles = createUseStyles(counterStyles, {
  name: 'Counter',
});
