import React from 'react';
import LoadingIcon from './loading-icon';

export default class LoadingButton extends React.Component {
  static displayName = 'Loading Button'
  state = {
    loading: false,
  }
  checkRequest = () => (
    async () => {
      this.setState({
        loading: !this.state.loading
      });
      await sleep(3000);
      this.setState({
        loading: !this.state.loading
      });
      function sleep(ms) {
        return new Promise(resolve => setTimeout(
          resolve, ms
        ));
      }
    }
  )
  render() {
    return (
      <button
        className="button loading-button"
        onClick={ this.checkRequest }
      >
        { this.state.loading ? <LoadingIcon /> : 'Save' }
      </button>
    );
  }
}
