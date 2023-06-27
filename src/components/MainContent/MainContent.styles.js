import { createUseStyles } from 'react-jss';

export const mainContentStyles = () => ({
  mainContent: {
    display: 'flex',
    flexDirection: 'column',
  },
});

export const useMainContentStyles = createUseStyles(mainContentStyles, {
  name: 'MainContent',
});
