import React, { useState, memo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';

import { FILTER_COUNTER } from '../../services/constants/actionTypes';

import { counterActions } from '../../store/actions/counter.actions';
import {
  adultsAction,
  childrenAction,
  childrenAgesAction,
  roomAction,
} from '../../store/actions/form.actions';

import { ChildrenSelectAge } from '../ChildrenSelectAge';
import { Counter } from '../Counter';
import { FilterChildrenSelect } from '../FilterChildrenSelect';

import './Filter.css';

export const Filter = memo(function Filter({ showFilter }) {
  const [selects, setSelects] = useState([]);
  const [showFilterChildrenSelect, setShowFilterChildrenSelect] =
    useState(false);

  const filterValues = useSelector((state) => state.filter);

  const state = useSelector((state) => state);

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

    dispatch(childrenAgesAction(selectValues.join(',')));
  };

  console.log(state);

  return (
    showFilter && (
      <div className="top-section__filter">
        <Counter
          id="adults"
          counterText="Adults"
          value={filterValues.adults}
          min={1}
          max={30}
          onClickMinusButton={() => {
            dispatch(counterActions(FILTER_COUNTER.adultsDecrement));
            dispatch(adultsAction(filterValues.adults));
          }}
          onClickPlusButton={() => {
            dispatch(counterActions(FILTER_COUNTER.adultsIncrement));
            dispatch(adultsAction(filterValues.adults));
          }}
        />
        <Counter
          id="children"
          counterText="Children"
          value={filterValues.children}
          min={0}
          max={10}
          onClickMinusButton={() => {
            dispatch(counterActions(FILTER_COUNTER.childrenDecrement));
            dispatch(childrenAction(filterValues.children));
            closeFilterChildrenSelect(filterValues.children);
            deleteSelect();
          }}
          onClickPlusButton={() => {
            dispatch(counterActions(FILTER_COUNTER.childrenIncrement));
            dispatch(childrenAction(filterValues.children));
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
            dispatch(counterActions(FILTER_COUNTER.roomDecrement));
            dispatch(roomAction(filterValues.room));
          }}
          onClickPlusButton={() => {
            dispatch(counterActions(FILTER_COUNTER.roomIncrement));
            dispatch(roomAction(filterValues.room));
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
