import { createUseStyles } from 'react-jss';

export const hotelPageStyles = (theme) => ({
  root: {
    display: 'flex',
    gap: 60,
    padding: '60px 0',
    backgroundColor: theme.palette.background.general,
  },
  contentWrap: {
    backgroundColor: theme.palette.background.general,
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
    color: theme.palette.blue.accent,
  },
  location: {
    fontWeight: 400,
    fontSize: 28,
    color: theme.palette.text.secondary,
  },
  headerWrap: {
    backgroundColor: theme.palette.blue.general,
  },
  header: {
    paddingBottom: 50,
  },
});

export const useHotelPageStyles = createUseStyles(hotelPageStyles, {
  name: 'HotelPage',
});
