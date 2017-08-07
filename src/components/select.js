import React from 'react';
import PropTypes from 'prop-types';
import Icon from '../components/icon';

const Select = (props) => (
  <div className="select">
    <select
      name={ props.name }
      onChange={ props.onChange }
      value={ props.value }
    >
      { props.children }
    </select>
    <Icon icon="ion-android-arrow-dropdown" />
  </div>
);

Select.displayName = 'Select';

Select.propTypes = {
  value: PropTypes.string,
  name: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node)
  ]),
  onChange: PropTypes.func
};

export default Select;
