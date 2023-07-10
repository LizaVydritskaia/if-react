import { createUseStyles } from 'react-jss';

export const homesGuestsLovesStyles = (theme) => ({
  root: {
    backgroundColor: theme.palette.background.secondary,
    order: 2,
  },
  hotels: {
    display: 'flex',
    gap: 16,
    position: 'relative',
  },
});

export const useHomesGuestsLovesStyles = createUseStyles(
  homesGuestsLovesStyles,
  { name: 'HomesGuestsLoves' },
);
