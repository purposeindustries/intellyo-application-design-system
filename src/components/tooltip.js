import React from 'react';
import PropTypes from 'prop-types';

const Tooltip = (props) => (
  <div className="tooltip">
    { props.children }
    <div className={ props.classname }></div>
  </div>
);

Tooltip.displayName = 'Tooltip';

Tooltip.propTypes = {
  children: PropTypes.string,
  classname: PropTypes.string,
};

export default Tooltip;
