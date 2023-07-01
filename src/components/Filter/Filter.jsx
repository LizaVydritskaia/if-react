import React, { useState, memo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';

import {
  setFormValue,
  adultsDecrement,
  adultsIncrement,
  childrenDecrement,
  childrenIncrement,
  roomDecrement,
  roomIncrement,
} from '../../store/slices/form.slice';

import { ChildrenSelectAge } from '../ChildrenSelectAge';
import { Counter } from '../Counter';
import { FilterChildrenSelect } from '../FilterChildrenSelect';

import './Filter.css';

export const Filter = memo(function Filter({ showFilter }) {
  const [selects, setSelects] = useState([]);
  const [showFilterChildrenSelect, setShowFilterChildrenSelect] =
    useState(false);

  const formValues = useSelector((state) => state.form);

  const dispatch = useDispatch();

  const openFilterChildrenSelect = () => {
    setShowFilterChildrenSelect(true);
  };

  const closeFilterChildrenSelect = (value) => {
    if (value <= 1) {
      setShowFilterChildrenSelect(false);
    }
  };

  const handleChangeInputValue = (action) => {
    dispatch(action);
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

    dispatch(setFormValue({ childrenAges: selectValues.join(',') }));
  };

  return (
    showFilter && (
      <div className="top-section__filter">
        <Counter
          id="adults"
          counterText="Adults"
          value={formValues.adults}
          min={1}
          max={30}
          onClickMinusButton={() => {
            handleChangeInputValue(adultsDecrement());
          }}
          onClickPlusButton={() => {
            handleChangeInputValue(adultsIncrement());
          }}
        />
        <Counter
          id="children"
          counterText="Children"
          value={formValues.children}
          min={0}
          max={10}
          onClickMinusButton={() => {
            handleChangeInputValue(childrenDecrement());
            closeFilterChildrenSelect(formValues.children);
            deleteSelect();
          }}
          onClickPlusButton={() => {
            handleChangeInputValue(childrenIncrement());
            openFilterChildrenSelect();
            addSelect();
          }}
        />
        <Counter
          id="room"
          counterText="Room"
          value={formValues.room}
          min={1}
          max={30}
          onClickMinusButton={() => {
            handleChangeInputValue(roomDecrement());
          }}
          onClickPlusButton={() => {
            handleChangeInputValue(roomIncrement());
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
