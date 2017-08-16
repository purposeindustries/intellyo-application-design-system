import React from 'react';
import PropTypes from 'prop-types';
import Tooltip from './tooltip';
import classNames from 'classnames';

export default class OverlayTrigger extends React.Component {
  static propTypes = {
    overlay: PropTypes.element,
    children: PropTypes.element,
  }
  static displayName = 'Overlay Trigger'
  state = {
    overlayStatus: false,
  }
  overlayStatus = (value) => {
    this.setState(
      {
        overlayStatus: value
      }
    );
  }
  render() {
    return (
      <div
        className={ classNames('overlay-trigger', {
          'overlay-trigger-active': this.state.overlayStatus
        }
        ) }
        onMouseEnter={ () => {
          this.overlayStatus(true);
        } }
        onMouseLeave={ () => {
          this.overlayStatus(false);
        } }
      >
        { this.props.children }
        <Tooltip>International University of Monaco</Tooltip>
      </div>
    );
  }
}
