import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import DisplayText from '../display-text';

class ChartTraceSummaryItem extends React.Component {
  static displayName = 'Chart Trace Summary Item';

  static propTypes = {
    color: PropTypes.string,
    value: PropTypes.string,
    title: PropTypes.string,
    data: PropTypes.string,
    onClick: PropTypes.func,
  };

  static defaultProps = {
    color: '#DF54D9',
    title: 'Add a competitor',
    value: 'n/a',
  }

  render() {
    return (
      <div className="chart-trace-summary-item" style={ {borderColor: this.props.color} } onClick={ this.props.onClick }>
        <div>{ this.props.title }</div>
        <DisplayText size="large">{ this.props.value }</DisplayText>
        <div className={ classNames({'kpi-data': this.props.data}) }>{ this.props.data || 'no data yet' }</div>
      </div>
    );
  }
}

export default ChartTraceSummaryItem;
