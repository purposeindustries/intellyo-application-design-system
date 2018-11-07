import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

export default function DropdownItem(props) {
  return (
    <div
      className={
        classNames('dropdown-item', {
          'dropdown-item--disabled': !!props.disabled
        })
      }
      onClick={ !props.disabled ? props.onClick : undefined }
      onMouseDown={ props.onMouseDown }
      id={ props.id }
    >
      { props.children }
    </div>
  );
}

DropdownItem.displayName = 'DropdownItem';

DropdownItem.propTypes = {
  children: PropTypes.node,
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]),
  onClick: PropTypes.func,
  onMouseDown: PropTypes.func,
  default: PropTypes.bool,
  id: PropTypes.string,
  icon: PropTypes.element,
  disabled: PropTypes.bool
};
