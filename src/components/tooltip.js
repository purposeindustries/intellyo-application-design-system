import React from 'react';
import PropTypes from 'prop-types';

const Tooltip = (props) => (
  <div className="tooltip">
    { props.children }
    <div className={ `${props.placement}` }></div>
  </div>
);

Tooltip.displayName = 'Tooltip';

Tooltip.defaultProps = {
  placement: 'tooltip-caret-bottom'
};

Tooltip.propTypes = {
  children: PropTypes.string,
  placement: PropTypes.string,
};

export default Tooltip;
