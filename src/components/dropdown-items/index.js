import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

import { Popper } from 'react-popper';

export default class DropdownItems extends React.Component {
  static displayName = 'DropdownItems';

  static propTypes = {
    children: PropTypes.node
  };

  state = {
    height: 'auto'
  }

  floatingContainer = null;

  componentWillMount() {
    if (typeof document !== 'undefined') {
      this.floatingContainer = document.getElementById('floating-container');
    }
  }

  componentDidMount() {
    setTimeout(() => { // getBoundingClientRect returns incorrect values without setTimeout
      if (this.shouldTrimItems()) {
        this.calculateHeight();
      }
    });
  }

  shouldTrimItems = () => {
    return this.dropdown.scrollHeight >
      (typeof window !== 'undefined' && window.innerHeight - this.dropdown.getBoundingClientRect().top);
  };

  calculateHeight = () => {
    this.setState({
      height: `${typeof window !== 'undefined' && window.innerHeight - this.dropdown.getBoundingClientRect().top - 20}px`
    });
  }

  render() {
    return (
      ReactDOM.createPortal(
        <Popper
          placement="bottom"
          // Disables Popper's recalculation on resize
          modifiers={ {
            hide: { enabled: false },
            preventOverflow: { enabled: false },
            flip: { enabled: false }
          } }
          className="dropdown-items"
        >
          <div
            ref={ el => (this.dropdown = el) }
            style={ {height: this.state.height, overflowY: 'auto'} }
          >
            { this.props.children }
          </div>
        </Popper>,
        this.floatingContainer
      )
    );
  }
}
