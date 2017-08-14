import React from 'react';
import Icon from './icon';

const DropdownButton = () => (
  <button type="button" className="multi-action-button multi-action-button-default-caret">
    <Icon icon="ion-android-arrow-dropdown" />
  </button>
);

DropdownButton.displayName = 'Dropdown Button';

export default DropdownButton;
