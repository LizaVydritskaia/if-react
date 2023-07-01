import React from 'react';
import { useSelector } from 'react-redux';
import { ThemeProvider } from 'react-jss';

//themes
import { darkTheme } from '../../themes/darkTheme';
import { lightTheme } from '../../themes/lightTheme';

export const ComponentThemeProvider = ({ children }) => {
  const themeValue = useSelector((state) => state.theme);
  const currentTheme = themeValue.mode !== 'light' ? darkTheme : lightTheme;

  return <ThemeProvider theme={currentTheme}>{children}</ThemeProvider>;
};
