import React, { useState, memo } from 'react';
import DatePicker from 'react-datepicker';

import 'react-datepicker/dist/react-datepicker.css';
import './Calendar.css';

export const Calendar = memo(function Calendar(props) {
  const [dateRange, setDateRange] = useState([null, null]);
  const [startDate, endDate] = dateRange;

  return (
    <DatePicker
      {...props}
      selectsRange={true}
      startDate={startDate}
      endDate={endDate}
      onChange={(update) => {
        setDateRange(update);
      }}
      minDate={new Date()}
      monthsShown={2}
      calendarStartDay={1}
      dateFormat="MMMM d, yyyy"
    />
  );
});
