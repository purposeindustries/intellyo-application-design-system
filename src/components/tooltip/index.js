import React from 'react';
import PropTypes from 'prop-types';
import Popper from '../custom-popper';

const Tooltip = (props) => (
  <Popper placement={ props.placement } className="overlay tooltip">
    { props.children }
  </Popper>
);

Tooltip.displayName = 'Tooltip';

Tooltip.defaultProps = {
  placement: 'top',
};

Tooltip.propTypes = {
  children: PropTypes.node.isRequired,
  placement: PropTypes.oneOf(['top', 'right', 'bottom', 'left']),
  className: PropTypes.string
};

export default Tooltip;
