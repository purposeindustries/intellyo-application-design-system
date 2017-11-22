import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const ESCKeyCode = 27;

export default class OverlayTrigger extends React.Component {

  static displayName = 'Overlay Trigger'

  static propTypes = {
    overlay: PropTypes.node.isRequired,
    children: PropTypes.node.isRequired,
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
      this.timeoutId = null;
    }

    this.setState({
      isActive: false
    });
  }

  onKeyDown = (e) => {
    if (e.keyCode === ESCKeyCode) {
      this.deactivate();
    }
  }

  componentDidMount() {
    window.addEventListener('keydown', (e) => this.onKeyDown(e));
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', (e) => this.onKeyDown(e));
    if (this.timeoutId) {
      clearTimeout(this.timeoutId);
      this.timeoutId = null;
    }
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
          classNames('overlay-trigger', {
            'overlay-trigger--active': this.state.isActive
          }, this.props.className)
        }
        { ...triggers }
      >
        <div
          className={ classNames('overlay-trigger-outer-area', {
            'overlay-trigger-outer-area--active': this.state.isActive && this.props.trigger === 'click'
          }) }
        />
        { this.props.children }
        { React.cloneElement(this.props.overlay, {
          className: classNames(this.props.overlay.props.className, 'overlay'),
          onClick: (e) => {
            if (this.props.overlay.props.onClick) {
              e.preventDefault();
              this.props.overlay.props.onClick();
            }
          }
        }) }
      </div>
    );
  }
}
