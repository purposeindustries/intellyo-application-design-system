import React from 'react';
import { string, bool, func } from 'prop-types';

const Option = (props) => (
  <div className="dropdown-item option">
    <label>
      <span>{ props.children }</span>
      <input type="checkbox" onChange={ props.onClick } checked={ props.checked } />
    </label>
  </div>
);

Option.displayName = 'Option';
Option.propTypes = {
  children: string,
  label: string,
  checked: bool,
  onClick: func,
  value: string,
};

export default Option;
