import React from 'react';
import PropTypes from 'prop-types';

export default class LoadingButton extends React.Component {
  static displayName = 'Loading Button'
  static propTypes = {
    checkRequest: PropTypes.func,
  }
  state = {}

  render() {
    return (
      <button
        className="button loading-button"
        onClick={ this.props.checkRequest }
      >
        Test me!
      </button>
    );
  }
}
