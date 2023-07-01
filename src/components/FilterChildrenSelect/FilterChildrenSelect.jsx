import React from 'react';
import { useTheme } from 'react-jss';
import PropTypes from 'prop-types';

//styles
import { useFilterChildrenSelectStyles } from './FilterChildrenSelect.styles';

export const FilterChildrenSelect = ({
  showFilterChildrenSelect,
  children,
}) => {
  const theme = useTheme();
  const classes = useFilterChildrenSelectStyles({ theme });

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
