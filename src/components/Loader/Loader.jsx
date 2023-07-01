import React from 'react';

import loadingImg from '../../assets/images/loading.gif';

//styles
import { useLoaderStyles } from './Loader.styles';

export const Loader = ({ loading, children }) => {
  const classes = useLoaderStyles();

  if (loading) {
    return (
      <div className={classes.loader}>
        <img src={loadingImg} alt="loading..." />
      </div>
    );
  }

  return children;
};
