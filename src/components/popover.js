import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const Popover = (props) => (
  <div className={ classNames('popover', `popover-placement--${props.placement}`) }>
    { props.children }
    <div className="popover-arrow"></div>
  </div>
);

Popover.displayName = 'Popover';

Popover.propTypes = {
  children: PropTypes.node,
  placement: PropTypes.string,
};

export default Popover;
