import React from 'react';
import DisplayText from '../components/display-text';
import Chart, { Preloader as ChartPreloader } from '../components/chart';

class ChartsPage extends React.Component {
  displayName = 'ChartsPage'
  render() {
    return (
      <div className="charts-page">
        <DisplayText>Charts</DisplayText>
        <Chart type="bar" loading={ true } />
      </div>
    );
  }
}

export default ChartsPage;
