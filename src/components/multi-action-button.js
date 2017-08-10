import React from 'react';
import Icon from './icon';

const MultiActionButton = () => (
  <div className="multi-action-button-wrapper">
    <button type="button" className="multi-action-button multi-action-button-default">Default action</button>
    <button type="button" className="multi-action-button multi-action-button-default-caret"><Icon icon="ion-android-arrow-dropdown" /></button>
  </div>
);

MultiActionButton.displayName = 'Multi Action Button';

export default MultiActionButton;
