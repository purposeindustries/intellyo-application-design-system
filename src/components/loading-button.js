import React from 'react';
import LoadingIcon from './loading-icon';

const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));

export default class LoadingButton extends React.Component {
  static displayName = 'Loading Button'
  state = {
    loading: false,
  }
  checkRequest = async () => {
    this.setState({
      loading: !this.state.loading
    });
    await sleep(3000);
    this.setState({
      loading: !this.state.loading
    });
  }
  render() {
    return (
      <button
        disabled={ this.state.loading }
        className="button"
        onClick={ this.checkRequest }
      >
        { this.state.loading ? <LoadingIcon /> : 'Save' }
      </button>
    );
  }
}