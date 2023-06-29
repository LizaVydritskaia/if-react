import React from 'react';
import PropTypes from 'prop-types';

import { useTitleStyle } from './Title.styles';

export const Title = ({ content }) => {
  const classes = useTitleStyle();

  return <h2 className={classes.title}>{content}</h2>;
};

Title.propTypes = {
  content: PropTypes.string,
};
