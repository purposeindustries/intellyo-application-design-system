import React from 'react';
import PropTypes from 'prop-types';

const Heading = (props) => (
  <h2 className="heading">{ props.children }</h2>
);

Heading.displayName = 'Heading';

Heading.propTypes = {
  children: PropTypes.node
};

export default Heading;
