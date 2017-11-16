import React from 'react';
import { number, array, func, node } from 'prop-types';
import { Table } from './index';

export default class InfiniteLoadingTable extends React.Component {
  static displayName = 'InfiniteLoadingTable';

  static propTypes = {
    rowPerPage: number,
    data: array,
    onPaginate: func,
    children: node,
  }

  static defaultProps = {
    onPaginate: () => {},
    rowPerPage: 20,
    data: [],
  }

  constructor(props) {
    super(props);
    this.state = {
      data: props.data
    };
  }

  componentDidMount() {
    window.addEventListener('scroll', this.scrollHandler);
    if (this.state.data.length === 0) {
      this.appendPlaceholders();
    }
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.scrollHandler);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.data !== this.state.data) {
      this.setState({
        data: nextProps.data
      });
    }
  }

  isLoading = () => {
    return this.state.data.some((element) => {
      return element.pending;
    });
  }

  appendPlaceholders() {
    this.setState({
      data: this.state.data.concat(Array(this.props.rowPerPage).fill({ pending: true }))
    });
  }

  scrollHandler = () => {
    if (!this._container) {
      return;
    }
    const { bottom } = this._container.getBoundingClientRect();
    if (bottom < window.innerHeight && !this.isLoading()) {
      this.appendPlaceholders();
      this.props.onPaginate();
    }
  };

  render() {
    return (
      <div
        ref={ el => {
          this._container = el;
        } }
        className="data-table--infinite"
      >
        <Table
          data={ this.state.data }
        >
          { this.props.children }
        </Table>
      </div>
    );
  }
}
