import React from 'react';
import PropTypes from 'prop-types';

const Tooltip = (props) => (
  <div className="tooltip">
    { props.children }
    <div className={ `tooltip-arrow--${props.placement}` }></div>
  </div>
);

Tooltip.displayName = 'Tooltip';

Tooltip.defaultProps = {
  placement: 'bottom'
};

Tooltip.propTypes = {
  children: PropTypes.string,
  placement: PropTypes.string,
};

export default Tooltip;
