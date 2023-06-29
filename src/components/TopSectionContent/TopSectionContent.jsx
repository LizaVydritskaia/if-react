import React from 'react';

import { Form } from '../Form';
import { Icon } from '../Icon';

import { useTopSectionContentStyles } from './TopSectionContent.styles';

export const TopSectionContent = () => {
  const classes = useTopSectionContentStyles();

  return (
    <>
      <h1 className={classes.title}>
        Discover stays
        <br />
        to live, work or just relax
      </h1>
      <Form />
      <div className={classes.apps}>
        <Icon className={classes.googlePlay} hrefIconName="#google-play" />
        <Icon className={classes.appStore} hrefIconName="#app-store" />
      </div>
    </>
  );
};
