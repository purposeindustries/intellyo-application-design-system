import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import DisplayText from './display-text';

const ChartTraceSummaryItem = (props) => (
  <div className="chart-trace-summary-item" style={ {borderColor: props.color} }>
    <div>{ props.title }</div>
    <DisplayText size="large">{ props.number }</DisplayText>
    <div className={ classNames({'kpi-analytics': props.analytics}) }>{ props.analytics || 'no data yet' }</div>
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
  color: '#DF54D9',
  title: 'Add a competitor',
  number: 'n/a',
};

export default ChartTraceSummaryItem;
