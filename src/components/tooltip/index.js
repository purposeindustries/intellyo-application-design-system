import React from 'react';
import PropTypes from 'prop-types';
import { Popper, Arrow } from 'react-popper';

const Tooltip = (props) => (
  <Popper placement={ props.placement } className="overlay tooltip">
    { props.children }
    <Arrow className="overlay-arrow" />
  </Popper>
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
