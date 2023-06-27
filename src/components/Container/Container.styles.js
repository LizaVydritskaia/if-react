import { createUseStyles } from 'react-jss';

export const containerStyles = () => ({
  container: {
    maxWidth: 1264,
    padding: '0 16px',
    margin: '0 auto',
  },
});

export const useContainerStyles = createUseStyles(containerStyles, {
  name: 'Container',
});
