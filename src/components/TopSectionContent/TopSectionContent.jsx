import React from 'react';
import { useTheme } from 'react-jss';

//components
import { Form } from '../Form';
import { Icon } from '../Icon';

//styles
import { useTopSectionContentStyles } from './TopSectionContent.styles';

export const TopSectionContent = () => {
  const theme = useTheme();
  const classes = useTopSectionContentStyles({ theme });

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
