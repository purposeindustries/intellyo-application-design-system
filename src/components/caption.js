import React from 'react';
import PropTypes from 'prop-types';

const Caption = (props) => (
  <p className="caption">{ props.children }</p>
);

Caption.displayName = 'Caption';

Caption.propTypes = {
  children: PropTypes.node
};

export default Caption;
