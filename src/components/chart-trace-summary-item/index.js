import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import DisplayText from '../display-text';

const toString = (data) => {
  if (!data) {
    return;
  }
  const shuffix = '% (avg.)';
  let prefix = '+';
  if (data < 0) {
    prefix = '-';
    data *= -1;
  }
  return prefix + (data * 100).toFixed(0) + shuffix;
};

class ChartTraceSummaryItem extends React.Component {
  static displayName = 'ChartTraceSummaryItem';

  static propTypes = {
    color: PropTypes.string,
    value: PropTypes.string,
    title: PropTypes.string,
    data: PropTypes.number,
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
        <div
          className={
            classNames('kpi-data', {
              'kpi-data--increase': this.props.data > 0,
              'kpi-data--decrease': this.props.data < 0
            })
          }
        >
          {
            toString(this.props.data) || 'not data yet'
          }
        </div>
      </div>
    );
  }
}

export default ChartTraceSummaryItem;
