import React from 'react';
import Button from './button/';
import Icon from './icon';

const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));

const LoadingIcon = () => {
  return (
    <span className="button-icon-wrapper">
      <Icon icon="ion-load-d" color="#fff" rotate={ true } />
    </span>
  );
};

LoadingIcon.displayName = 'Loading Icon';

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
      <Button
        disabled={ this.state.loading }
        onClick={ this.checkRequest }
        icon={ this.state.loading ? <LoadingIcon /> : null }
      >
        { this.state.loading ? 'Loading...' : 'Save' }
      </Button>
    );
  }
}
