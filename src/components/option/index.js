import React from 'react';
import { string, bool, func, node } from 'prop-types';
import { Checkbox } from '../index';

const Option = (props) => (
  <div
    className="dropdown-item option"
    onClick={ props.onClick }
  >
    <label>
      <span>{ props.children }</span>
      <Checkbox checked={ props.checked } onChange={ props.onClick } />
    </label>
  </div>
);

Option.displayName = 'Option';
Option.propTypes = {
  children: node,
  checked: bool,
  onClick: func,
  value: string,
};

export default Option;
