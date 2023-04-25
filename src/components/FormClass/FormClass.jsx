import React, { Component } from 'react';

import { Input } from '../Input';
import { Button } from '../Button';

import { getAvailableHotels } from '../../services/availableHotels';

import './FormClass.css';

export class FormClass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      destinationInputValue: '',
      showAvailableHotelsBlock: false,
      availableHotels: [],
    };

    this.handleChangeDestinationInputValue =
      this.handleChangeDestinationInputValue.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    getAvailableHotels(this.state.destinationInputValue).then((hotels) =>
      this.setState({ availableHotels: hotels }),
    );
  }

  handleChangeDestinationInputValue(event) {
    this.setState({
      destinationInputValue: event.target.value.toLowerCase().trim(),
    });
  }

  handleClick(event) {
    event.preventDefault();

    this.state.availableHotels.filter((item) => {
      return (
        item.name.toLowerCase().includes(this.state.destinationInputValue) ||
        item.city.toLowerCase().includes(this.state.destinationInputValue) ||
        item.country.toLowerCase().includes(this.state.destinationInputValue)
      );
    });

    this.setState({ showAvailableHotelsBlock: true });
  }

  render() {
    return (
      <form className="top-section__form">
        <Input
          id="destinations"
          className="top-section__input-destination"
          type="text"
          name="destinations"
          placeholder="New York"
          forId="destinations"
          labelClassName="top-section__label-destination"
          content="Your destination or hotel name"
          onChange={this.handleChangeDestinationInputValue}
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
        <Button
          className="top-section__button"
          type="submit"
          onClick={this.handleClick}
        >
          Search
        </Button>
      </form>
    );
  }
}
