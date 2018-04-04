import React from 'react';
import PropTypes from 'prop-types';
import Popper from '../custom-popper';

const Popover = (props) => (
  <Popper placement={ props.placement } className="overlay popover">
    { props.children }
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
