import { createUseStyles } from 'react-jss';

export const availableHotelsStyles = () => ({
  availableHotels: {
    backgroundColor: 'var(--background-color)',
    order: 1,
  },
});

export const useAvailableHotelsStyles = createUseStyles(availableHotelsStyles, {
  name: 'AvailableHotels',
});
