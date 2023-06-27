import { createUseStyles } from 'react-jss';

export const footerStyles = () => ({
  root: {
    backgroundColor: 'var(--general-blue)',
    order: 6,
  },
  footerLogo: {
    display: 'none',
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
      color: 'var(--text-general-white)',
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
    color: 'var(--text-general-white)',
  },
  copyright: {
    fontWeight: 400,
    fontSize: 14,
    color: 'var(--text-general-white)',
    paddingBottom: 120,
  },
});

export const useFooterStyles = createUseStyles(footerStyles, {
  name: 'Footer',
});
