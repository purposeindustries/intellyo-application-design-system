import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import DisplayText from '../display-text';
import Icon from '../icon';

const Kpi = (props) => {
  const data = props.data;
  if (!data) {
    return (
      <span className="chart-trace-summary-item-data-no-data">
        (no data)
      </span>
    );
  }
  let icon = 'ion-arrow-up-c';
  let toDisplay = data;
  if (data < 0) {
    icon = 'ion-arrow-down-c';
    toDisplay *= -1;
  }
  return (
    <span
      className={
        classNames('chart-trace-summary-item-data', {
          'chart-trace-summary-item-data--decrease': data < 0,
          'chart-trace-summary-item-data--increase': data > 0
        })
      }
    >
      <Icon icon={ icon } fontSize="14px" />
      { (toDisplay * 100).toFixed(0) + '% (avg.)' }
    </span>
  );
};

Kpi.displayName = 'ChartTraceSummaryItemKpi';

Kpi.propTypes = {
  data: PropTypes.number
};

class ChartTraceSummaryItem extends React.Component {
  static displayName = 'ChartTraceSummaryItem';

  static propTypes = {
    color: PropTypes.string,
    value: PropTypes.string,
    title: PropTypes.string,
    data: PropTypes.number,
    onClick: PropTypes.func,
    date: PropTypes.string
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
        <span className="chart-trace-summary-item-date">
          { this.props.date }
        </span>
        { ' ' }
        <Kpi data={ this.props.data } />
      </div>
    );
  }
}

export default ChartTraceSummaryItem;
