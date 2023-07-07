import { createUseStyles } from 'react-jss';

export const reviewsStyles = (theme) => ({
  root: {
    order: 5,
    backgroundColor: theme.palette.background.general,
  },
  blocksList: {
    display: 'flex',
    marginBottom: 120,
    position: 'relative',
  },
  block: {
    backgroundColor: theme.palette.background.secondary,
    paddingBottom: 24,

    '&:first-child': {
      marginLeft: 0,
    },
    '&:last-child': {
      marginRight: 0,
    },
  },
  img: {
    width: '100%',
    height: 400,
    marginBottom: 24,
    position: 'relative',
  },
  price: {
    width: '100%',
    height: 48,
    backgroundColor: 'rgba(56, 56, 56, 0.7)',
    padding: '16px 24px 11px',
    position: 'absolute',
    bottom: 0,

    '& > p': {
      fontWeight: 400,
      fontSize: 18,
      color: theme.palette.text.main,
    },
    '& span': {
      fontWeight: 500,
    },
  },
  hotel: {
    display: 'flex',
    justifyContent: 'space-between',
    margin: '0 24px 32px',
  },
  hotelName: {
    fontWeight: 500,
    fontSize: 18,
    color: theme.palette.blue.accent,
    marginBottom: 16,
  },
  hotelLocation: {
    fontWeight: 400,
    fontSize: 18,
    color: theme.palette.blue.accent,
  },
  rating: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-end',
  },
  score: {
    width: 48,
    height: 32,
    backgroundColor: theme.palette.blue.general,
    borderRadius: 8,
    marginBottom: 8,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',

    '& > span': {
      fontFamily: '"Open Sans", sans-serif',
      fontStyle: 'normal',
      fontWeight: 600,
      fontSize: 18,
      color: theme.palette.text.main,
    },
  },
  amount: {
    fontWeight: 400,
    fontSize: 14,
    color: theme.palette.text.secondary,
  },
  name: {
    display: 'flex',
    alignItems: 'center',
    gap: 20,
    margin: '0 32px 24px',
  },
  userLogo: {
    width: 52,
    height: 52,
  },
  userName: {
    fontWeight: 400,
    fontSize: 18,
    color: theme.palette.text.dark,
    marginBottom: 8,
  },
  country: {
    fontWeight: 400,
    fontSize: 18,
    color: theme.palette.text.secondary,

    '& img': {
      width: 16,
      height: 12,
      marginRight: 8,
    },
  },
  text: {
    fontWeight: 400,
    fontSize: 18,
    lineHeight: '117%',
    color: theme.palette.text.dark,
    margin: '0 24px',
  },
  circleArrow: {
    width: 40,
    height: 40,
    borderRadius: '50%',
    backgroundColor: theme.palette.background.stroke,
    boxShadow: '0 2px 5px rgba(56, 56, 56, 50)',
    position: 'absolute',
    top: '24%',
    right: '-20px',
  },
  arrow: {
    width: 12,
    height: 12,
    border: `2px solid ${theme.palette.text.primary}`,
    borderLeft: 0,
    borderTop: 0,
    borderBottomRightRadius: 2,
    transform: 'rotate(-45deg) skew(-10deg, -5deg) translate(15%, 150%)',
  },
  '@media (max-width: 480px)': {
    paginator: {
      display: 'flex',
      gap: 8,
      maxWidth: 56,
      margin: '0 auto',
      paddingBottom: 40,
    },
    paginatorFill: {
      width: 8,
      height: 8,
      backgroundColor: theme.palette.grey.primary,
      borderRadius: '50%',
    },
    paginatorEmpty: {
      width: 8,
      height: 8,
      border: `1px solid ${theme.palette.grey.primary}`,
      borderRadius: '50%',
    },
  },
});

export const useReviewsStyles = createUseStyles(reviewsStyles, {
  name: 'Reviews',
});
