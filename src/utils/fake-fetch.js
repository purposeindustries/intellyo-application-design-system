// Fake fetch to simulate server request with setTimout
import React from 'react';
import PropTypes from 'prop-types';
import lipsum from 'lorem-ipsum';

// some fake data
const data = [];
let i;
for (i = 0; i < 20; i++) {
  data.push({
    id: i + 1,
    title: lipsum({count: 1, units: 'sentences'}),
    description: lipsum({count: 2, units: 'paragraphs'}),
    tags: Array(Math.floor(Math.random() * 5)).join(0).split(0).map(() => lipsum({count: 1, units: 'words'})),
  });
}

export default class FakeFetch extends React.Component {
  static displayName = 'FakeFetch'
  static propTypes = {
    url: PropTypes.string,
    children: PropTypes.func
  };
  state = {
    isLoading: false,
    data: []
  }
  shouldComponentUpdate = (nextProps, nextState) => {
    return (nextState.data !== this.state.data || nextState.isLoading !== this.state.isLoading);
  }
  componentDidMount() {
    this.fetchData();
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.url !== this.props.url) {
      this.fetchData();
    }
  }
  fetchData() {
    this.setState({
      isLoading: true
    }, () => {
      setTimeout(() => {
        this.setState((state) => ({
          isLoading: false,
          data: state.data.concat(data)
        }));
      }, 2000);
    });
  }
  render() {
    return React.Children.only(this.props.children({ ...this.state }));
  }
}

