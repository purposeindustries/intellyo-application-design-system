import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

export default class OverlayTrigger extends React.Component {
  static propTypes = {
    overlay: PropTypes.node,
    children: PropTypes.node,
    placement: PropTypes.string,
    popover: PropTypes.string,
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
        className={ classNames('overlay-trigger', `overlay-trigger--${this.props.placement}`, {
          'overlay-trigger--active': this.state.overlayStatus
        }
        ) }
        onMouseEnter={ () => {
          if (this.props.popover === 'active') {
            this.overlayStatus(false);
          } else {
            this.overlayStatus(true);
          }
        }
        }
        onMouseLeave={ () => {
          this.overlayStatus(false);
        } }
        onClick={ () => {
          this.setState({
            overlayStatus: !this.state.overlayStatus
          });
        }
        }
      >
        { this.props.children }
        { this.props.overlay }
      </div>
    );
  }
}
