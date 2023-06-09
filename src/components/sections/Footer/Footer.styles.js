import { createUseStyles } from 'react-jss';

export const footerStyles = (theme) => ({
  root: {
    backgroundColor: theme.palette.blue.general,
    order: 6,
  },
  footerLogo: {
    display: 'none',
  },
  footerLogoSize: {
    width: 0,
    height: 0,
  },
  lists: {
    display: 'flex',
    paddingTop: 120,

    '& ul:nth-child(1)': {
      marginLeft: 0,
    },
    '& ul:nth-child(3)': {
      marginRight: 0,
    },
    '& ul': {
      listStyle: 'none',
      color: theme.palette.text.main,
      fontWeight: 400,
      fontSize: 20,
      lineHeight: '115%',
      marginBottom: 64,
      paddingLeft: 0,
    },
    '& ul li': {
      marginBottom: 24,
    },
  },
  'ul li:last-child': {
    marginBottom: 0,
  },
  'ul li:first-child': {
    fontWeight: 500,
  },
  link: {
    textDecoration: 'none',
    color: theme.palette.text.main,
  },
  copyright: {
    fontWeight: 400,
    fontSize: 14,
    color: theme.palette.text.main,
    paddingBottom: 120,
  },
  '@media (max-width: 1024px)': {
    footerLogoSize: {
      width: 156,
      height: 30,
    },
  },
  '@media (max-width: 480px)': {
    footerLogoSize: {
      width: 98,
      height: 19,
    },
  },
});

export const useFooterStyles = createUseStyles(footerStyles, {
  name: 'Footer',
});
