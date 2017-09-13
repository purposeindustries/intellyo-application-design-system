import React from 'react';
import Caption from '../caption';

const EmptyView = () => (
  <div className="empty-view">
    <p className="empty-view-figure">¯\_(ツ)_/¯</p>
    <Caption>
      There is nothing to show.
    </Caption>
  </div>
);

EmptyView.displayName = 'EmptyView';

export default EmptyView;

