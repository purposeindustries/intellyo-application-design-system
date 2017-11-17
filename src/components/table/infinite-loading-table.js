import React from 'react';
import PropTypes from 'prop-types';
import { Table } from './index';
import throttle from 'lodash.throttle';

export default class InfiniteLoadingTable extends React.Component {
  static displayName = 'InfiniteLoadingTable';

  static propTypes = {
    rowPerPage: PropTypes.number,
    data: PropTypes.array,
    onPaginate: PropTypes.func,
    isLoading: PropTypes.bool,
    isExhausted: PropTypes.bool,
    children: PropTypes.node,
  }

  static defaultProps = {
    rowPerPage: 20,
    data: [],
    onPaginate: () => {},
    isLoading: false,
    isExhausted: false,
  }

  constructor(props) {
    super(props);

    this.throttledScrollHandler = throttle(this.scrollHandler, 200);
  }

  componentDidMount() {
    window.addEventListener('scroll', this.throttledScrollHandler);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.throttledScrollHandler);
  }

  getPlaceholders(amount) {
    return Array(amount).fill({ pending: true });
  }

  appendPlaceholders(data, amount) {
    return data.concat(this.getPlaceholders(amount));
  }

  scrollHandler = () => {
    if (!this._container || this.props.isLoading || this.props.isExhausted) {
      return;
    }
    const { bottom } = this._container.getBoundingClientRect();
    if (bottom <= window.innerHeight + 100) {
      const { data, rowPerPage } = this.props;
      const currentPage = Math.ceil(data.length / rowPerPage);
      this.props.onPaginate(currentPage);
    }
  };

  render() {
    const { data, rowPerPage, isLoading } = this.props;
    let dataWithPendings;
    if (isLoading) {
      dataWithPendings = this.appendPlaceholders(data, rowPerPage);
    }
    return (
      <div
        ref={ el => {
          this._container = el;
        } }
        className="data-table--infinite"
      >
        <Table
          data={ dataWithPendings || data }
        >
          { this.props.children }
        </Table>
      </div>
    );
  }
}
