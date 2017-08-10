import React from 'react';
import Icon from './icon';

const MultiActionButton = () => (
  <div className="button-wrapper">
    <button type="button" className="btn btn-default">Default</button>
    <button type="button" className="btn btn-default-caret"><Icon icon="ion-android-arrow-dropdown" />
    </button>
  </div>
);

MultiActionButton.displayName = 'Multi Action Button';

export default MultiActionButton;
