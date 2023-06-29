import { createUseStyles } from 'react-jss';

export const hotelPageStyles = () => ({
  root: {
    display: 'flex',
    gap: 60,
    margin: '60px 0',
  },
  image: {
    width: 700,
  },
  description: {
    display: 'flex',
    flexDirection: 'column',
    gap: 30,
    paddingTop: 25,
  },
  name: {
    fontWeight: 400,
    fontSize: 46,
    color: 'var(--accent-blue)',
  },
  location: {
    fontWeight: 400,
    fontSize: 28,
    color: 'var(--text-secondary-color)',
  },
  headerWrap: {
    backgroundColor: 'var(--general-blue)',
  },
  header: {
    paddingBottom: 50,
  },
});

export const useHotelPageStyles = createUseStyles(hotelPageStyles, {
  name: 'HotelPage',
});
