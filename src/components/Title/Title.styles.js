import { createUseStyles } from 'react-jss';

export const titleStyles = (theme) => ({
  title: {
    fontWeight: 500,
    fontSize: 40,
    color: theme.palette.text.dark,
    textAlign: 'center',
    paddingTop: 120,
    marginBottom: 105,
  },
});

export const useTitleStyle = createUseStyles(titleStyles, { name: 'Title' });
