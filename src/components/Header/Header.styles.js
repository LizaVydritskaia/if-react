import { createUseStyles } from 'react-jss';

export const headerStyles = (theme) => ({
  root: {
    paddingTop: 50,
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  nav: {
    display: 'flex',
    gap: 48,
  },
  staysAttractions: {
    display: 'flex',
    justifyContent: 'space-between',
    gap: 24,
    alignItems: 'center',
  },
  stays: {
    position: 'relative',
  },
  attractions: {
    position: 'relative',
  },
  link: {
    fontWeight: 400,
    fontSize: 24,
    color: theme.palette.text.main,
    textDecoration: 'none',
  },
  hoverLine: {
    '&:hover::after': {
      content: '""',
      display: 'block',
      height: 4,
      backgroundColor: theme.palette.yellow,
      borderStyle: 'none',
      position: 'absolute',
      left: '50%',
      bottom: '-12px',
      transform: 'translate(-50%)',
      animation: '$hoverLine 200ms ease-in 1 20ms forwards',
    },
  },
  '@keyframes hoverLine': {
    '0%': {
      width: 0,
      opacity: 0,
    },
    '70%': {
      width: 35,
      opacity: 0.7,
    },
    '100%': {
      width: 50,
      opacity: 1,
    },
  },
  nightAccount: {
    display: 'flex',
    gap: 24,
    alignItems: 'center',
    position: 'relative',
  },
  logo: {
    width: 205,
    height: 40,
  },
  light: {
    width: 30,
    height: 30,

    '&:hover': {
      cursor: 'pointer',
    },
  },
  dark: {
    width: 30,
    height: 30,
    fill: theme.palette.yellow,

    '&:hover': {
      cursor: 'pointer',
    },
  },
  menu: {
    display: 'none',
  },
});

export const useHeaderStyles = createUseStyles(headerStyles, {
  name: 'Header',
});
