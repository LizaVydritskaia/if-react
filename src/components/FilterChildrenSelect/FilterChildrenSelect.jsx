import React from 'react';
import PropTypes from 'prop-types';

import { useFilterChildrenSelectStyles } from './FilterChildrenSelect.styles';

export const FilterChildrenSelect = ({
  showFilterChildrenSelect,
  children,
}) => {
  const classes = useFilterChildrenSelectStyles();

  return (
    showFilterChildrenSelect && (
      <div className={classes.filterChildren}>
        <form action="/">
          <label className={classes.filterLabel} htmlFor="child-age">
            What is the age of the child you’re travelling with?
          </label>
          {children}
        </form>
      </div>
    )
  );
};

FilterChildrenSelect.propTypes = {
  showFilterChildrenSelect: PropTypes.bool,
};
