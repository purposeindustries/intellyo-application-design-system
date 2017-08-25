import React from 'react';
import LoadingIcon from './loading-icon';

export default class LoadingButton extends React.Component {
  static displayName = 'Loading Button'
  state = {
    loading: false,
  }
  checkRequest = () => (
    this.setState({
      loading: !this.state.loading
    })
  );
  render() {
    return (
      <button
        className="button loading-button"
        onClick={ this.checkRequest }
      >
        { this.state.loading ? <LoadingIcon /> : 'Click me' }
      </button>
    );
  }
}
