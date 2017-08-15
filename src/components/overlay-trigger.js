import React from 'react';
import PropTypes from 'prop-types';
import Tooltip from './tooltip';

export default class OverlayTrigger extends React.Component {
  static propTypes = {
    overlay: PropTypes.element,
    children: PropTypes.element,
  }
  static displayName = 'Overlay Trigger'
  state = {
    overlayStatus: false,
  }
  overlayStatus = () => {
    this.setState(
      {
        overlayStatus: !this.state.overlayStatus
      }
    );
  }
  render() {
    return (
      <div className="overlay-trigger" onMouseOver={ () => this.overlayStatus() }>
        { this.props.children }
        { this.state.overlayStatus ? <Tooltip /> : null }
      </div>
    );
  }
}
