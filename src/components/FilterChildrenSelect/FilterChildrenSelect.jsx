import React from 'react';
import PropTypes from 'prop-types';

import './FilterChildrenSelect.css';

export const FilterChildrenSelect = ({
  showFilterChildrenSelect,
  children,
}) => {
  return (
    showFilterChildrenSelect && (
      <div className="top-section__filter-children">
        <form className="top-section__filter-form" action="/">
          <label className="top-section__filter-label" htmlFor="child-age">
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
