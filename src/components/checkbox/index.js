import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import { Icon } from '../index';

const Checkbox = (props) => (
  <label
    className={ cx('checkbox-wrapper', {
      'checkbox-wrapper--checked': props.checked
    }) }
    onClick={ (e) => {
      e.preventDefault();
      props.onChange();
    } }
  >
    <div className="checkbox">
      { props.checked && (
        <Icon icon="ion-checkmark" />
      ) }
    </div>
    <input checked={ props.checked } type="checkbox" />
  </label>
);

Checkbox.displayName = 'Checkbox';
Checkbox.propTypes = {
  checked: PropTypes.bool,
  onChange: PropTypes.func,
};
Checkbox.defaultProps = {
  onChange: () => {}
};

export default Checkbox;
