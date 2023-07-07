import { createUseStyles } from 'react-jss';

export const iconAccountStyles = (theme) => ({
  account: {
    width: 40,
    height: 40,

    '&:hover': {
      cursor: 'pointer',
    },
  },
  loggedOut: {
    fill: theme.palette.form.background.general,
  },
  loggedIn: {
    fill: theme.palette.yellow,
  },
});

export const useIconAccountStyles = createUseStyles(iconAccountStyles, {
  name: 'IconAccount',
});
