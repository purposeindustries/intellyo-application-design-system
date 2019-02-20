import React from 'react';
import PropTypes from 'prop-types';
import { Icon } from '../index';

const Checkbox = ({ checked, onChange, disabled }) => (
  <div
    role="checkbox"
    onClick={ disabled !== true && onChange }
    onKeyDown={ (e) => disabled !== true && e.keyCode === 13 && onChange() }
    aria-checked={ checked }
    aria-disabled={ disabled }
    tabIndex={ 0 }
    className="checkbox"
  >
    <Icon icon="ion-checkmark" />
  </div>
);

Checkbox.displayName = 'Checkbox';
Checkbox.propTypes = {
  checked: PropTypes.bool,
  disabled: PropTypes.bool,
  onChange: PropTypes.func,
};
Checkbox.defaultProps = {
  onChange: () => {},
  disabled: false
};

export default Checkbox;
