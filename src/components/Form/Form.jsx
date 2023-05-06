import React, { useState } from 'react';

import { Button } from '../Button';
import { Input } from '../Input';

import { useAvailableHotelsSearch } from '../../hooks/useAvailableHotelsSearch';

import './Form.css';
import { Calendar } from '../Calendar';

export const Form = ({ setShowAvailableHotels }) => {
  const [searchParams, setSearchParams] = useState('');
  const availableHotels = useAvailableHotelsSearch(searchParams);

  const handleSubmitClick = (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData.entries());

    const { destinations } = data;

    setSearchParams(() => destinations);

    setShowAvailableHotels(true);

    return availableHotels;
  };

  return (
    <form className="top-section__form" onSubmit={handleSubmitClick}>
      <Input
        id="destinations"
        className="top-section__input-destination"
        type="text"
        name="destinations"
        placeholder="New York"
        forId="destinations"
        labelClassName="top-section__label-destination"
        labelContent="Your destination or hotel name"
      />
      <Calendar placeholderText="Tue 15 Sept — Sat 19 Sept" />
      <span className="top-section__label-check-in-out">
        Check-in — Check-out
      </span>
      <div className="top-section__room">
        <Input
          id="adults"
          className="top-section__input-adults"
          type="text"
          name="adults"
          placeholder="2"
          forId="adults"
          labelClassName="top-section__label-adults"
          labelContent="Adults"
        />
        <span className="top-section__input-room-dash">—</span>
        <div className="top-section__children">
          <div className="top-section__line top-section__line--left"></div>
          <Input
            id="children"
            className="top-section__input-children-room"
            type="text"
            name="children"
            placeholder="0"
            forId="children"
            labelClassName="top-section__label-children"
            labelContent="Children"
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
            placeholder="1"
            forId="room"
            labelClassName="top-section__label-room"
            labelContent="Room"
          />
        </div>
      </div>
      <Button className="top-section__button" type="submit">
        Search
      </Button>
    </form>
  );
};
