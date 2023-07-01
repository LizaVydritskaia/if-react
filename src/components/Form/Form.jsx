import React, { useState, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useTheme } from 'react-jss';
import classNames from 'classnames';

//components
import { Button } from '../Button';
import { Calendar } from '../Calendar';
import { Filter } from '../Filter';
import { Input } from '../Input';

//context
import { useAvailableHotelsContext } from '../../contexts/AvailableHotels.context';

//slices
import {
  setCalendarValues,
  setDestination,
} from '../../store/slices/form.slice';

//styles
import { useFormStyles } from './Form.styles';

export const Form = () => {
  const theme = useTheme();
  const classes = useFormStyles({ theme });

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
    <form className={classes.form} onSubmit={handleSubmitClick}>
      <Input
        id="destination"
        className={classes.inputDestination}
        type="text"
        name="destination"
        placeholder="New York"
        forId="destination"
        labelClassName={classes.labelDestination}
        labelContent="Your destination or hotel name"
      />
      <Calendar placeholderText="Tue 15 Sept — Sat 19 Sept" />
      <span className={classes.labelCheckInOut}>Check-in — Check-out</span>
      <div className={classes.room} onClick={handleOpenCloseFilter}>
        <Input
          id="adults"
          className={classes.inputAdults}
          type="text"
          name="adults"
          value={filterValues.adults}
          forId="adults"
          labelClassName={classes.labelAdults}
          labelContent="Adults"
          isDisabledInput
        />
        <span className={classes.inputRoomDash}>—</span>
        <div className={classes.children}>
          <div className={classNames(classes.line, classes.lineLeft)}></div>
          <Input
            id="children"
            className={classes.inputChildrenRoom}
            type="text"
            name="children"
            value={filterValues.children}
            forId="children"
            labelClassName={classes.labelChildren}
            labelContent="Children"
            isDisabledInput
          />
          <div className={classNames(classes.line, classes.lineRight)}></div>
        </div>
        <span className={classes.inputRoomDash}>—</span>
        <div className={classes.formRoom}>
          <Input
            id="room"
            className={classNames(
              classes.inputChildrenRoom,
              classes.inputChildrenRoomBorder,
            )}
            type="text"
            name="room"
            value={filterValues.room}
            forId="room"
            labelClassName={classes.labelRoom}
            labelContent="Room"
            isDisabledInput
          />
        </div>
      </div>
      <Filter showFilter={showFilter} />
      <Button
        className={classes.button}
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
