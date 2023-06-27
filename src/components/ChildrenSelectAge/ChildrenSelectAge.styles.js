import { createUseStyles } from 'react-jss';

export const childrenSelectAgeStyles = () => ({
  filterSelect: {
    width: 99,
    height: 30,
    border: '1px solid var(--accent-blue)',
    padding: 6,
    marginTop: 15,
    fontSize: 12,
    fontWeight: 400,
    textAlign: 'left',
    color: 'var(--dark-gray)',
    display: 'inline-block',

    '&:focus': {
      outline: 'none',
    },
    '&:nth-child(even)': {
      marginRight: 13,
    },
  },
});

export const useChildrenSelectAgeStyles = createUseStyles(
  childrenSelectAgeStyles,
  { name: 'ChildrenSelectAge' },
);
