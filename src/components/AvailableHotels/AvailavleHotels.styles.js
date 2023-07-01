import { createUseStyles } from 'react-jss';

export const availableHotelsStyles = (theme) => ({
  availableHotels: {
    backgroundColor: theme.palette.background.secondary,
    order: 1,
  },
});

export const useAvailableHotelsStyles = createUseStyles(availableHotelsStyles, {
  name: 'AvailableHotels',
});
