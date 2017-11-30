import React from 'react';
import PropTypes from 'prop-types';
import { Popper, Arrow } from 'react-popper';

const Popover = (props) => (
  <Popper placement={ props.placement } className="overlay popper popover">
    { props.children }
    <Arrow className="popper__arrow" />
  </Popper>
);

Popover.displayName = 'Popover';

Popover.propTypes = {
  children: PropTypes.node,
  placement: PropTypes.oneOf(['top', 'right', 'bottom', 'left']),
  className: PropTypes.string,
};

Popover.defaultProps = {
  placement: 'top',
};

export default Popover;
