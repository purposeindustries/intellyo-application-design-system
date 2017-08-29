import React from 'react';
import PropTypes from 'prop-types';

const ChartTraceSummaryItem = (props) => (
  <div>
    { props.children }
  </div>
);

ChartTraceSummaryItem.displayName = 'Chart Trace Summary Item';

ChartTraceSummaryItem.propTypes = {
  children: PropTypes.node
};

export default ChartTraceSummaryItem;
