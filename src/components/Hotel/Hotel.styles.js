import { createUseStyles } from 'react-jss';

export const hotelStyles = () => ({
  hotelBlock: {
    width: 296,

    '& a': {
      textDecoration: 'none',
    },
    '&:nth-child(n + 5)': {
      display: 'none',
    },
    '&:first-child': {
      marginLeft: 0,
    },
    '&:nth-child(4)': {
      marginRight: 0,
    },
  },
  image: {
    width: '100%',
    height: 296,
  },
  name: {
    fontWeight: 400,
    fontSize: 24,
    color: 'var(--accent-blue)',
    margin: '24px 0',
  },
  location: {
    fontWeight: 400,
    fontSize: 24,
    color: 'var(--text-secondary-color)',
    paddingBottom: 120,
  },
});

export const useHotelStyles = createUseStyles(hotelStyles, { name: 'Hotel' });
