import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

import { Popper } from 'react-popper';

export default class DropdownItems extends React.Component {
  static displayName = 'DropdownItems';

  static propTypes = {
    children: PropTypes.node
  };

  floatingContainer = null;

  componentWillMount() {
    if (typeof document !== 'undefined') {
      this.floatingContainer = document.getElementById('floating-container');
    }
  }

  render() {
    return (
      ReactDOM.createPortal(
        <Popper
          placement="bottom"
          modifiers={ {
            hide: { enabled: false },
            // Disables Popper's recalculation on resize
            preventOverflow: { enabled: false }
          } }
          className="dropdown-items"
        >
          { this.props.children }
        </Popper>,
        this.floatingContainer
      )
    );
  }
}
