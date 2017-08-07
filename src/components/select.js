import React from 'react';
import PropTypes from 'prop-types';
import Icon from '../components/icon';

const Select = (props) => (
  <div className="select">
    <select
      name={ props.name }
      onChange={ props.onChange }
    >
      { props.children }
    </select>
    <Icon icon="ion-android-arrow-dropdown" />
  </div>
);

Select.displayName = 'Select';

Select.propTypes = {
  name: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node)
  ]),
  onChange: PropTypes.func
};

export default Select;
