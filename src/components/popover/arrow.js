import React from 'react';
import PropTypes from 'prop-types';

const Arrow = (props) => (
  <div
    className="popover-arrow-wrap"
    style={ props.arrowStyles }
  >
    <div className="popover-arrow" />
    <div className="popover-arrow-cover" />
  </div>
);

Arrow.propTypes = {
  arrowStyles: PropTypes.object,
};

Arrow.defaultProps = {
  arrowStyles: {},
};

Arrow.displayName = 'Arrow';

export default Arrow;
