import React from 'react';
import Button from '../button/';
import Icon from '../icon/';
import PropTypes from 'prop-types';

const isPromise = (obj) => obj && typeof obj.then === 'function';

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
  static propTypes = {
    onClick: PropTypes.func,
  }
  static defaultProps = {
    onClick: () => {}
  }
  state = {
    loading: false,
  }
  handleClick = () => {
    this.setState({
      loading: true
    });
    const promise = this.props.onClick();
    if (!isPromise(promise)) {
      return;
    }
    promise.then(() => {
      this.setState({
        loading: false
      });
    });
  }
  render() {
    return (
      <Button
        disabled={ this.state.loading }
        onClick={ this.handleClick }
        icon={ this.state.loading ? <LoadingIcon /> : null }
      >
        { this.state.loading ? 'Loading...' : 'Save' }
      </Button>
    );
  }
}
