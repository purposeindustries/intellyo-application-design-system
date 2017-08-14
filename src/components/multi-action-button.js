import React from 'react';
import Icon from './icon';
import DropdownButton from './dropdown-button';

const MultiActionButton = () => (
  <div>
    <div className="multi-action-button-wrapper">
      <button type="button" className="multi-action-button multi-action-button-default">Default action</button>
      <DropdownButton />
      {/* <button type="button" className="multi-action-button multi-action-button-default-caret">
        <Icon icon="ion-android-arrow-dropdown" />
      </button> */}
    </div>
    <ul className="multi-action-button-dropdown-menu">
      <li><a>{}</a></li>
      <li><a>{}</a></li>
      <li><a>{}</a></li>
      <li><a>{}</a></li>
    </ul>
  </div>
);

MultiActionButton.displayName = 'Multi Action Button';

export default MultiActionButton;
