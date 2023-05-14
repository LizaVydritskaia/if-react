import React, { useState } from 'react';

import { Button } from '../Button';
import { ChildrenSelectAge } from '../ChildrenSelectAge';
import { FilterChildrenSelect } from '../FilterChildrenSelect';
import { Input } from '../Input';

import './Filter.css';

const initialCounter = [
  {
    id: 'adults',
    filterText: 'Adults',
    value: 2,
    min: 1,
    max: 30,
  },
  {
    id: 'children',
    filterText: 'Children',
    value: 0,
    min: 0,
    max: 10,
  },
  {
    id: 'room',
    filterText: 'Room',
    value: 1,
    min: 1,
    max: 30,
  },
];

export const Filter = ({ showFilter }) => {
  const [counters, setCounters] = useState(initialCounter);
  const [selects, setSelects] = useState([]);
  const [showFilterChildrenSelect, setShowFilterChildrenSelect] =
    useState(false);

  const handleMinusClick = (id) => {
    const updatedCounters = counters.map((counter) => {
      if (counter.id === id) {
        return {
          ...counter,
          value: counter.value - 1,
        };
      }
      return counter;
    });

    setCounters(updatedCounters);
  };

  const handlePlusClick = (id) => {
    const updatedCounters = counters.map((counter) => {
      if (counter.id === id) {
        return {
          ...counter,
          value: counter.value + 1,
        };
      }
      return counter;
    });

    setCounters(updatedCounters);
  };

  const openFilterChildrenSelect = (id) => {
    if (id === 'children') {
      setShowFilterChildrenSelect(true);
    }
  };

  const closeFilterChildrenSelect = (id, value) => {
    if (id === 'children' && value === 0) {
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

  return (
    showFilter && (
      <div className="top-section__filter">
        {counters.map((counter) => (
          <div className="top-section__filter-block" key={counter.id}>
            <span className="top-section__filter-text">
              {counter.filterText}
            </span>
            <div className="top-section__filter-counter">
              <Button
                type="button"
                className="top-section__filter-button"
                isDisabledButton={counter.value === counter.min}
                onClick={() => {
                  handleMinusClick(counter.id);
                  deleteSelect();
                  closeFilterChildrenSelect(counter.id, counter.value);
                }}
              >
                –
              </Button>
              <Input
                type="text"
                value={counter.value}
                className="top-section__input-value"
                isDisabledInput={true}
              />
              <Button
                type="button"
                className="top-section__filter-button"
                isDisabledButton={counter.value === counter.max}
                onClick={() => {
                  handlePlusClick(counter.id);
                  openFilterChildrenSelect(counter.id);
                  addSelect();
                }}
              >
                +
              </Button>
            </div>
          </div>
        ))}
        <FilterChildrenSelect
          showFilterChildrenSelect={showFilterChildrenSelect}
        >
          {selects.map((select) => (
            <ChildrenSelectAge key={select.id} />
          ))}
        </FilterChildrenSelect>
      </div>
    )
  );
};
