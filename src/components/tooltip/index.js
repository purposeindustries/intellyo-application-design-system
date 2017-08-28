import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const Tooltip = (props) => (
  <div
    className={
      classNames(props.className, 'tooltip', `tooltip-placement--${props.placement}`)
    }
  >
    { props.children }
    <div className="tooltip-arrow" />
  </div>
);

Tooltip.displayName = 'Tooltip';

Tooltip.defaultProps = {
  placement: 'top',
};

Tooltip.propTypes = {
  children: PropTypes.string.isRequired,
  placement: PropTypes.oneOf(['top', 'right', 'bottom', 'left']),
  className: PropTypes.string
};

export default Tooltip;
