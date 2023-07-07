import React from 'react';

//styles
import { useMainContentStyles } from './MainContent.styles';

export const MainContent = ({ children }) => {
  const classes = useMainContentStyles();

  return <main className={classes.mainContent}>{children}</main>;
};
