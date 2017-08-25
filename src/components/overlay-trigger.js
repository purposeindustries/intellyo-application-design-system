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
  }

  static defaultProps = {
    placement: 'top',
    trigger: 'hover'
  }

  state = {
    isActive: false,
  }

  render() {

    const triggers = {};
    if (this.props.trigger === 'click') {
      triggers.onClick = () => {
        this.setState((state) => ({
          ...state,
          isActive: !state.isActive
        }));
      };
    }
    if (this.props.trigger === 'hover') {
      triggers.onMouseEnter = () => {
        this.setState({
          isActive: true
        });
      };
      triggers.onMouseLeave = () => {
        this.setState({
          isActive: false
        });
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
