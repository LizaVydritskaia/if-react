import { createUseStyles } from 'react-jss';

export const offerStyles = (theme) => ({
  root: {
    width: '100%',
    order: 2,
    backgroundColor: theme.palette.background.general,
  },
  title: {
    marginTop: 120,
    marginBottom: 104,
    textAlign: 'center',
    fontSize: 40,
    fontWeight: 500,
    color: theme.palette.text.dark,
    position: 'relative',

    '&:after': {
      content: '""',
      display: 'block',
      width: 100,
      height: 4,
      backgroundColor: theme.palette.yellow,
      borderStyle: 'none',
      position: 'absolute',
      bottom: '-24px',
      left: '50%',
      transform: 'translate(-50%)',
    },
  },
  icons: {
    display: 'flex',
    marginBottom: 120,
  },
  iconBlock: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',

    '&:first-child': {
      marginLeft: 0,
    },
    '&:last-child': {
      marginRight: 0,
    },
  },
  icon: {
    width: 100,
    height: 100,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 48,
  },
  iconSupport: {
    width: 76,
    height: 92,
  },
  iconCommunicate: {
    width: 84,
    height: 84,
  },
  iconBooking: {
    width: 100,
    height: 68,
  },
  iconReviews: {
    width: 92,
    height: 84,
  },
  text: {
    fontSize: 24,
    fontWeight: 400,
    color: theme.palette.text.dark,
  },
});

export const useOfferStyles = createUseStyles(offerStyles, { name: 'Offer' });
