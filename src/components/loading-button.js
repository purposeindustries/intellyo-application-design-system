import React from 'react';

export default class LoadingButton extends React.Component {
  static displayName = 'Loading Button'
  state = {
    loading: 'true',
  }
  checkRequest() {
    this.setState({
      loading: !this.state.loading
    });
  }
  render() {
    return (
      <button
        className="button loading-button"
        onClick={ this.checkRequest }
      >
        { this.state.loading ? this.state.loading : {} }
      </button>
    );
  }
}
