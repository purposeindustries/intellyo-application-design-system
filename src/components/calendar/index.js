import React from 'react';
import ReactBigCalendar from 'react-big-calendar';
import moment from 'moment';

ReactBigCalendar.setLocalizer(
  ReactBigCalendar.momentLocalizer(moment)
);

const Calendar = (props) => (
  <div className="calendar">
    <ReactBigCalendar { ...props } />
  </div>
);

Calendar.displayName = 'Calendar';

export default Calendar;
