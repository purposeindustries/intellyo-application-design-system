import React from 'react';
import Card from '../components/card';
import Calendar from '../components/calendar';
import events from '../utils/dummy-calendar-events';

export default class CalendarPage extends React.Component {
  static displayName = 'CalendarPage';
  render() {
    return (
      <div className="calendar-page">
        <Card
          title="Calendar"
        >
          <Calendar
            events={ events }
          />
        </Card>
      </div>
    );
  }
}
