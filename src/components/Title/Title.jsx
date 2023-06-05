import React from 'react';
import PropTypes from 'prop-types';

import './Title.css';

export const Title = ({ content }) => <h2 className="title">{content}</h2>;

Title.propTypes = {
  content: PropTypes.string,
};
