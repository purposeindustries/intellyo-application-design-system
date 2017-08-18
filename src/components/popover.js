import React from 'react';
import PropTypes from 'prop-types';

const Popover = (props) => (
  <div className="popover">
    { props.children }
    <div className="popover-arrow"></div>
  </div>
);

Popover.displayName = 'Popover';

Popover.propTypes = {
  children: PropTypes.node,
};

export default Popover;
