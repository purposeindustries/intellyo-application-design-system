import React from 'react';
import PropTypes from 'prop-types';

const Subheading = (props) => (
  <h3 className="subheading">{ props.children }</h3>
);

Subheading.propTypes = {
  children: PropTypes.node
};

Subheading.displayName = 'Subheading';

export default Subheading;
