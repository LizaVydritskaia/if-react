import React, { useState, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';

//components
import { Button } from '../Button';
import { Calendar } from '../Calendar';
import { Filter } from '../Filter';
import { Input } from '../Input';

import { useAvailableHotelsContext } from '../../contexts/AvailableHotels.context';

import {
  setCalendarValues,
  setDestination,
} from '../../store/slices/form.slice';

import './Form.css';

export const Form = () => {
  const { availableHotelsRef, setShowAvailableHotels } =
    useAvailableHotelsContext();

  const [showFilter, setShowFilter] = useState(false);

  const filterValues = useSelector((state) => state.filter);

  const dispatch = useDispatch();

  const handleSubmitClick = (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData.entries());

    const { destination } = data;

    dispatch(setDestination(destination));

    setShowAvailableHotels(true);
  };

  const handleOpenCloseFilter = useCallback(() => {
    setShowFilter((prevState) => {
      return !prevState;
    });
  }, []);

  const scrollToAvailableHotels = () => {
    availableHotelsRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  const handleScroll = () => {
    setTimeout(scrollToAvailableHotels, 500);
  };

  const getCalendarValues = () => {
    const calendarInput = document.getElementsByClassName(
      'react-datepicker__input-container',
    );

    dispatch(setCalendarValues(calendarInput[0].children[1].value));
  };

  return (
    <form className="top-section__form" onSubmit={handleSubmitClick}>
      <Input
        id="destination"
        className="top-section__input-destination"
        type="text"
        name="destination"
        placeholder="New York"
        forId="destination"
        labelClassName="top-section__label-destination"
        labelContent="Your destination or hotel name"
      />
      <Calendar placeholderText="Tue 15 Sept — Sat 19 Sept" />
      <span className="top-section__label-check-in-out">
        Check-in — Check-out
      </span>
      <div className="top-section__room" onClick={handleOpenCloseFilter}>
        <Input
          id="adults"
          className="top-section__input-adults"
          type="text"
          name="adults"
          value={filterValues.adults}
          forId="adults"
          labelClassName="top-section__label-adults"
          labelContent="Adults"
          isDisabledInput
        />
        <span className="top-section__input-room-dash">—</span>
        <div className="top-section__children">
          <div className="top-section__line top-section__line--left"></div>
          <Input
            id="children"
            className="top-section__input-children-room"
            type="text"
            name="children"
            value={filterValues.children}
            forId="children"
            labelClassName="top-section__label-children"
            labelContent="Children"
            isDisabledInput
          />
          <div className="top-section__line top-section__line--right"></div>
        </div>
        <span className="top-section__input-room-dash">—</span>
        <div className="top-section__form-room">
          <Input
            id="room"
            className="top-section__input-children-room top-section__input-children-room--border"
            type="text"
            name="room"
            value={filterValues.room}
            forId="room"
            labelClassName="top-section__label-room"
            labelContent="Room"
            isDisabledInput
          />
        </div>
      </div>
      <Filter showFilter={showFilter} />
      <Button
        className="top-section__button"
        type="submit"
        onClick={() => {
          handleOpenCloseFilter();
          handleScroll();
          getCalendarValues();
        }}
      >
        Search
      </Button>
    </form>
  );
};
