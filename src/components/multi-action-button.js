import React from 'react';
//import PropTypes from 'prop-types';

const MultiActionButton = () => (
  <div className="button-wrapper">
    <button type="button" className="btn btn-default">Default</button>
    <button type="button" className="btn btn-default-caret"><span className="caret">V</span></button>
  </div>
);

MultiActionButton.displayName = 'Multi Action Button';

export default MultiActionButton;
