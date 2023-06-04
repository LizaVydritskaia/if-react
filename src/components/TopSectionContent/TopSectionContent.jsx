import React from 'react';

import { Form } from '../Form';
import { Icon } from '../Icon';

import './TopSectionContent.css';

export const TopSectionContent = () => {
  return (
    <>
      <h1 className="top-section__title">
        Discover stays
        <br />
        to live, work or just relax
      </h1>
      <Form />
      <div className="top-section__apps">
        <Icon
          className="top-section__apps--google-play"
          hrefIconName="#google-play"
        />
        <Icon
          className="top-section__apps--app-store"
          hrefIconName="#app-store"
        />
      </div>
    </>
  );
};
