import React from 'react';
import PropTypes from 'prop-types';

import { Icon } from '../index';

const Checkbox = ({ checked, onChange }) => (
  <div
    role="checkbox"
    onClick={ onChange }
    onKeyDown={ (e) => e.keyCode === 13 && onChange() }
    aria-checked={ checked }
    tabIndex={ 0 }
    className="checkbox"
  >
    <Icon icon="ion-checkmark" />
  </div>
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
