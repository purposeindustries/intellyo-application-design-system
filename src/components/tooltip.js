import React from 'react';
import PropTypes from 'prop-types';

const Tooltip = (props) => (
  <div className="tooltip">
    { props.children }
    <div className="tooltip-caret"></div>
  </div>
);

Tooltip.displayName = 'Tooltip';

Tooltip.propTypes = {
  children: PropTypes.string
};

export default Tooltip;
