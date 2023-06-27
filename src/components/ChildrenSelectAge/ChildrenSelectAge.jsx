import React, { useMemo } from 'react';
import PropTypes from 'prop-types';

import { useChildrenSelectAgeStyles } from './ChildrenSelectAge.styles';

export const ChildrenSelectAge = ({ onChange }) => {
  const classes = useChildrenSelectAgeStyles();

  const options = useMemo(() => {
    const option = [];
    for (let i = 0; i <= 17; i++) {
      option.push({
        value: i,
        optionContent: `${i} years old`,
      });
    }

    return option;
  }, []);

  return (
    <select
      className={classes.filterSelect}
      id="child-age"
      name="child-age"
      onChange={onChange}
    >
      {options.map((option) => {
        return (
          <option key={option.value} value={option.value}>
            {option.optionContent}
          </option>
        );
      })}
    </select>
  );
};

ChildrenSelectAge.propTypes = {
  onChange: PropTypes.func,
};
