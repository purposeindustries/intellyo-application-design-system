import React from 'react';
import PropTypes from 'prop-types';

export default function DropdownItem(props) {
  return (
    <div
      className="dropdown-item"
      onClick={ props.onClick }
      onMouseDown={ props.onMouseDown }
      id={ props.id }
    >
      { props.children }
    </div>
  );
}

DropdownItem.displayName = 'DropdownItem';

DropdownItem.propTypes = {
  children: PropTypes.string,
  value: PropTypes.string,
  onClick: PropTypes.func,
  onMouseDown: PropTypes.func,
  default: PropTypes.bool,
  id: PropTypes.string
};
