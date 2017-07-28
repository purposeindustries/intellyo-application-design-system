import React from 'react';
import PropTypes from 'prop-types';
import Icon from '../components/icon';
// import classNames from 'classnames';

const Select = (props) => (
  <div className="select">
    <select>
      { props.children }
    </select>
    <Icon icon="ion-android-arrow-dropdown" />
  </div>
);

Select.displayName = 'Select';

Select.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

export default Select;
