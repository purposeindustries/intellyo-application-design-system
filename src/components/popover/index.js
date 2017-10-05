import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const Popover = (props) => (
  <div className={ classNames(props.className, 'popover', `popover--${props.placement}`) }>
    { props.children }
  </div>
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
