import { createUseStyles } from 'react-jss';

export const homesGuestsLovesStyles = () => ({
  root: {
    backgroundColor: 'var(--background-color)',
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
