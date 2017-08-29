import React from 'react';
import PropTypes from 'prop-types';

const ChartTraceSummaryItem = (props) => (
  <div className="chart-trace-summary-item" style={ {borderColor: props.color} }>
    <p>{ props.title }</p>
    <p className="kpi-number">{ props.number }</p>
    <p className="kpi-analytics">{ props.analytics }</p>
  </div>
);

ChartTraceSummaryItem.displayName = 'Chart Trace Summary Item';

ChartTraceSummaryItem.propTypes = {
  color: PropTypes.string,
  number: PropTypes.string,
  title: PropTypes.string,
  analytics: PropTypes.string,
};

ChartTraceSummaryItem.defaultProps = {
  color: '#FFB946',
};

export default ChartTraceSummaryItem;
