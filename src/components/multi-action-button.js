import React from 'react';
import Icon from './icon';

const MultiActionButton = () => (
  <div>
    <div className="multi-action-button-wrapper">
      <button type="button" className="multi-action-button multi-action-button-default">Default action</button>
      <button type="button" className="multi-action-button multi-action-button-default-caret"><Icon icon="ion-android-arrow-dropdown" /></button>
    </div>
    <ul className="multi-action-button-dropdown-menu">
      <li><a>Action one</a></li>
      <li><a>Some other action</a></li>
      <li><a>Action two</a></li>
      <li><a>Action, action</a></li>
    </ul>
  </div>
);

MultiActionButton.displayName = 'Multi Action Button';

export default MultiActionButton;
