import { createUseStyles } from 'react-jss';

export const titleStyles = {
  title: {
    fontWeight: 500,
    fontSize: 40,
    color: 'var(--text-primary-color)',
    textAlign: 'center',
    paddingTop: 120,
    marginBottom: 105,
  },
};

export const useTitleStyle = createUseStyles(titleStyles, { name: 'Title' });
