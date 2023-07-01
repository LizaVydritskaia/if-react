import React, { useState, memo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useTheme } from 'react-jss';
import PropTypes from 'prop-types';

//slices
import { setChildrenAges } from '../../store/slices/form.slice';
import {
  adultsDecrement,
  adultsIncrement,
  childrenDecrement,
  childrenIncrement,
  roomDecrement,
  roomIncrement,
} from '../../store/slices/counter.slice';

//components
import { ChildrenSelectAge } from '../ChildrenSelectAge';
import { Counter } from '../Counter';
import { FilterChildrenSelect } from '../FilterChildrenSelect';

//styles
import { useFilterStyles } from './Filter.styles';

export const Filter = memo(function Filter({ showFilter }) {
  const theme = useTheme();
  const classes = useFilterStyles({ theme });

  const [selects, setSelects] = useState([]);
  const [showFilterChildrenSelect, setShowFilterChildrenSelect] =
    useState(false);

  const filterValues = useSelector((state) => state.filter);

  const dispatch = useDispatch();

  const openFilterChildrenSelect = () => {
    setShowFilterChildrenSelect(true);
  };

  const closeFilterChildrenSelect = (value) => {
    if (value <= 1) {
      setShowFilterChildrenSelect(false);
    }
  };

  const addSelect = () => {
    const newSelect = {
      id: Math.random(),
    };

    setSelects([...selects, newSelect]);
  };

  const deleteSelect = () => {
    setSelects([...selects.slice(0, selects.length - 1)]);
  };

  const getChildrenAges = () => {
    const childrenSelect = document.getElementsByClassName(
      'top-section__filter-select',
    );
    const childrenSelectArray = Array.from(childrenSelect);

    const selectValues = [];

    childrenSelectArray.forEach((select) => {
      selectValues.push(select.value);
    });

    dispatch(setChildrenAges(selectValues.join(',')));
  };

  return (
    showFilter && (
      <div className={classes.filter}>
        <Counter
          id="adults"
          counterText="Adults"
          value={filterValues.adults}
          min={1}
          max={30}
          onClickMinusButton={() => {
            dispatch(adultsDecrement());
          }}
          onClickPlusButton={() => {
            dispatch(adultsIncrement());
          }}
        />
        <Counter
          id="children"
          counterText="Children"
          value={filterValues.children}
          min={0}
          max={10}
          onClickMinusButton={() => {
            dispatch(childrenDecrement());
            closeFilterChildrenSelect(filterValues.children);
            deleteSelect();
          }}
          onClickPlusButton={() => {
            dispatch(childrenIncrement());
            openFilterChildrenSelect();
            addSelect();
          }}
        />
        <Counter
          id="room"
          counterText="Room"
          value={filterValues.room}
          min={1}
          max={30}
          onClickMinusButton={() => {
            dispatch(roomDecrement());
          }}
          onClickPlusButton={() => {
            dispatch(roomIncrement());
          }}
        />
        <FilterChildrenSelect
          showFilterChildrenSelect={showFilterChildrenSelect}
        >
          {selects.map((select) => (
            <ChildrenSelectAge key={select.id} onChange={getChildrenAges} />
          ))}
        </FilterChildrenSelect>
      </div>
    )
  );
});

Filter.propTypes = {
  showFilter: PropTypes.bool,
};
