import React from 'react';

import { Button } from '../Button';
import { Input } from '../Input';

import './Form.css';

export const Form = ({ setSearchParams, setShowAvailableHotels }) => {
  const handleSubmitClick = (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData.entries());

    const { destinations } = data;

    setSearchParams(destinations);

    setShowAvailableHotels(true);
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
        content="Your destination or hotel name"
      />
      <div className="top-section__date">
        <div className="top-section__check-in">
          <Input
            id="check-in"
            className="top-section__input-check-in"
            type="text"
            name="date"
            placeholder="Tue 15 Sept"
            forId="check-in"
            labelClassName="top-section__label-check-in"
            content="Check-in"
          >
            <span>—</span>
          </Input>
        </div>
        <span className="top-section__input-date-dash">—</span>
        <div className="top-section__check-out">
          <Input
            id="check-out"
            className="top-section__input-check-out"
            type="text"
            name="date"
            placeholder="Sat 19 Sept"
            forId="check-out"
            labelClassName="top-section__label-check-out"
            content="Check-out"
          />
        </div>
      </div>
      <div className="top-section__room">
        <Input
          id="adults"
          className="top-section__input-adults"
          type="text"
          name="adults"
          placeholder="2"
          forId="adults"
          labelClassName="top-section__label-adults"
          content="Adults"
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
            content="Children"
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
            content="Room"
          />
        </div>
      </div>
      <Button className="top-section__button" type="submit">
        Search
      </Button>
    </form>
  );
};
