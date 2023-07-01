import React from 'react';
import { useTheme } from 'react-jss';
import PropTypes from 'prop-types';

//styles
import { useTitleStyle } from './Title.styles';

export const Title = ({ content }) => {
  const theme = useTheme();
  const classes = useTitleStyle({ theme });

  return <h2 className={classes.title}>{content}</h2>;
};

Title.propTypes = {
  content: PropTypes.string,
};
