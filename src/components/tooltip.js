import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const Tooltip = (props) => (
  <div className={ classNames('tooltip', `tooltip-placement--${props.placement}`) }>
    { props.children }
    <div className="tooltip-arrow"></div>
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
