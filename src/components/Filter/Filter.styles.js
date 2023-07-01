import { createUseStyles } from 'react-jss';

export const filterStyles = (theme) => ({
  filter: {
    width: 259,
    backgroundColor: theme.palette.form.background.general,
    padding: 22,
    border: `2px solid ${theme.palette.background.stroke}`,
    borderRadius: 8,
    position: 'absolute',
    top: '130%',
    right: '15%',
    zIndex: 1,
    animation: '$showFilter 150ms ease-in 1 forwards',
  },
  '@keyframes showFilter': {
    '0%': {
      opacity: 0,
    },
    '50%': {
      opacity: 0.5,
    },
    '100%': {
      opacity: 1,
    },
  },
});

export const useFilterStyles = createUseStyles(filterStyles, {
  name: 'Filter',
});
