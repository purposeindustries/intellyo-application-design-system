import React from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import { Popper as ReactPopper, Arrow } from 'react-popper';

let floatingContainer;

if (typeof document !== 'undefined') {
  floatingContainer = document.getElementById('floating-container');
}

export default class Popper extends React.PureComponent {
  static displayName = 'Popper';

  static propTypes = {
    children: PropTypes.node,
    placement: PropTypes.oneOf(['top', 'right', 'bottom', 'left']),
    className: PropTypes.string,
  };

  render() {
    return (
      ReactDOM.createPortal(
        <ReactPopper
          placement={ this.props.placement }
          className={ this.props.className }
        >
          { this.props.children }
          <Arrow className="overlay-arrow" />
        </ReactPopper>,
        floatingContainer
      )
    );
  }
}
