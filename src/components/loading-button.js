import React from 'react';
import Button from './button/';
import Icon from './icon';

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
      <Button
        disabled={ this.state.loading }
        onClick={ this.checkRequest }
      >
        { this.state.loading ? <Icon icon="ion-load-d" color="#fff" rotate={ true } /> : 'Save' }
      </Button>
    );
  }
}
