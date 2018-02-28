import React from 'react';
import { findDOMNode } from 'react-dom';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Manager, Target } from 'react-popper';
import enhanceWithClickOutside from 'react-click-outside';

const ESCKeyCode = 27;

class OverlayTrigger extends React.Component {

  static displayName = 'Overlay Trigger'

  static propTypes = {
    overlay: PropTypes.node.isRequired,
    children: PropTypes.node.isRequired,
    trigger: PropTypes.oneOf(['click', 'hover']),
    className: PropTypes.string,
    delay: PropTypes.number
  }

  static defaultProps = {
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

  removeTimer = () => {
    if (this.timeoutId) {
      clearTimeout(this.timeoutId);
      this.timeoutId = null;
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
    this.setState({
      isActive: false
    });
    this.removeTimer();
  }

  onKeyDown = (e) => {
    if (e.keyCode === ESCKeyCode) {
      this.deactivate();
    }
  }

  handleClickOutside = () => {
    this.deactivate();
  }

  componentDidMount() {
    window.addEventListener('keydown', this.onKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.onKeyDown);
    this.removeTimer();
  }

  render() {
    const triggers = {};
    if (this.props.trigger === 'click') {
      triggers.onClick = () => {
        if (this.state.isActive === false) {
          this.activate();
        }
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
      <Manager>
        <div
          className={
            classNames('overlay-trigger', {
              'overlay-trigger--active': this.state.isActive
            }, this.props.className)
          }
          { ...triggers }
        >
          <Target
            innerRef={ c => (this.target = findDOMNode(c)) }
            onClick={ this.toggle }
          >
            { this.props.children }
          </Target>
          { React.cloneElement(this.props.overlay, {
            className: classNames(this.props.overlay.props.className, 'overlay'),
            onClick: (e) => {
              if (this.props.overlay.props.onClick) {
                e.preventDefault();
                this.props.overlay.props.onClick();
              }
            },
            innerRef: (c) => (this.popper = findDOMNode(c))
          }) }
        </div>
      </Manager>
    );
  }
}

export default enhanceWithClickOutside(OverlayTrigger);
