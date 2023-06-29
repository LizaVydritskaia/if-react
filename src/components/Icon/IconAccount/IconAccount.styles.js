import { createUseStyles } from 'react-jss';

export const iconAccountStyles = () => ({
  account: {
    width: 40,
    height: 40,

    '&:hover': {
      cursor: 'pointer',
    },
  },
  loggedOut: {
    fill: 'var(--text-general-white)',
  },
  loggedIn: {
    fill: 'var(--accent-yellow)',
  },
});

export const useIconAccountStyles = createUseStyles(iconAccountStyles, {
  name: 'IconAccount',
});
