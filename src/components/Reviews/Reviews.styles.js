import { createUseStyles } from 'react-jss';

export const reviewsStyles = () => ({
  root: {
    order: 5,
  },
  blocksList: {
    display: 'flex',
    marginBottom: 120,
    position: 'relative',
  },
  block: {
    backgroundColor: 'var(--background-color)',
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
      color: 'var(--text-general-white)',
    },
    '& span': {
      fontWeight: 500,
    },
  },
  hotel: {
    display: 'flex',
    justifyContent: 'space-between',
    margin: '0 24px 29px',
  },
  hotelName: {
    fontWeight: 500,
    fontSize: 18,
    color: 'var(--accent-blue)',
    marginBottom: 16,
  },
  hotelLocation: {
    fontWeight: 400,
    fontSize: 18,
    color: 'var(--accent-blue)',
  },
  rating: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-end',
  },
  score: {
    width: 48,
    height: 32,
    backgroundColor: 'var(--general-blue)',
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
      color: 'var(--text-general-white)',
    },
  },
  amount: {
    fontWeight: 400,
    fontSize: 14,
    color: 'var(--text-secondary-color)',
  },
  name: {
    display: 'flex',
    alignItems: 'center',
    gap: 21,
    margin: '0 29px 22px',
  },
  userLogo: {
    width: 53,
    height: 53,
  },
  userName: {
    fontWeight: 400,
    fontSize: 18,
    color: 'var(--text-primary-color)',
    marginBottom: 8,
  },
  country: {
    fontWeight: 400,
    fontSize: 18,
    color: 'var(--text-secondary-color)',

    '& img': {
      width: 16,
      height: 13,
      marginRight: 8,
    },
  },
  text: {
    fontWeight: 400,
    fontSize: 18,
    lineHeight: '117%',
    color: 'var(--text-primary-color)',
    margin: '0 24px',
  },
  circleArrow: {
    width: 40,
    height: 40,
    borderRadius: '50%',
    backgroundColor: 'var(--stroke-color)',
    boxShadow: '0 2px 5px rgba(56, 56, 56, 50)',
    position: 'absolute',
    top: '24%',
    right: '-20px',
  },
  arrow: {
    width: 13,
    height: 13,
    border: '2px solid var(--text-primary-color)',
    borderLeft: 0,
    borderTop: 0,
    borderBottomRightRadius: 2,
    transform: 'rotate(-45deg) skew(-10deg, -5deg) translate(15%, 135%)',
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
      backgroundColor: 'var(--dark-gray)',
      borderRadius: '50%',
    },
    paginatorEmpty: {
      width: 8,
      height: 8,
      border: '1px solid var(--dark-gray)',
      borderRadius: '50%',
    },
  },
});

export const useReviewsStyles = createUseStyles(reviewsStyles, {
  name: 'Reviews',
});
