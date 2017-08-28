import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

export default class OverlayTrigger extends React.Component {

  static displayName = 'Overlay Trigger'

  static propTypes = {
    overlay: PropTypes.node.isRequired,
    children: PropTypes.node.isRequired,
    placement: PropTypes.string,
    trigger: PropTypes.oneOf(['click', 'hover']),
    className: PropTypes.string,
    delay: PropTypes.number
  }

  static defaultProps = {
    placement: 'top',
    trigger: 'hover',
    delay: 800
  }

  state = {
    isActive: false,
  }

  toggle = () => {
    if (this.state.isActive) {
      this.deactivate();
    } else {
      this.activate();
    }
  }

  activate = (force) => {
    if (this.props.delay && !force) {
      this.timeoutId = setTimeout(() => {
        this.activate(true);
      }, this.props.delay);
    } else {
      this.setState({
        isActive: true
      });
    }
  }

  deactivate = () => {

    if (this.timeoutId) {
      clearTimeout(this.timeoutId);
    }

    this.setState({
      isActive: false
    });
  }

  render() {

    const triggers = {};
    if (this.props.trigger === 'click') {
      triggers.onClick = () => {
        this.toggle();
      };
    }
    if (this.props.trigger === 'hover') {
      triggers.onMouseEnter = () => {
        this.activate();
      };
      triggers.onMouseLeave = () => {
        this.deactivate();
      };
    }

    return (
      <div
        className={
          classNames('overlay-trigger', `overlay-trigger--placement-${this.props.placement}`, {
            'overlay-trigger--active': this.state.isActive
          }, this.props.className)
        }
        { ...triggers }
      >
        { this.props.children }
        { React.cloneElement(this.props.overlay, {
          ...this.props.overlay.props,
          placement: this.props.placement,
          className: classNames(this.props.overlay.props.className, 'overlay')
        }) }
      </div>
    );
  }
}
