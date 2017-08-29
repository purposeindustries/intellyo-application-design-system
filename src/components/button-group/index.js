import React from 'react';
import PropTypes from 'prop-types';

const ButtonGroup = (props) => {
  return (
    <div className="button-group">
      { props.children }
    </div>
  );
};

ButtonGroup.displayName = 'Button Group';

ButtonGroup.propTypes = {
  children: PropTypes.node,
};

export default ButtonGroup;
