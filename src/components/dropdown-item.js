import React from 'react';
import PropTypes from 'prop-types';

export default function DropdownItem(props) {
  return (
    <div
      className="dropdown-item"
      onClick={ props.onClick }
      onMouseDown={ props.onMouseDown }
    >
      { props.children }
    </div>
  );
}

DropdownItem.displayName = 'DropdownItem';

DropdownItem.propTypes = {
  children: PropTypes.string,
  onClick: PropTypes.func,
  onMouseDown: PropTypes.func,
  default: PropTypes.bool
};
