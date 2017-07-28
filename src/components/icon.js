import React from 'react';
import Ionicon from 'react-ionicons';
import icons from 'react-ionicons/lib/icons';
import PropTypes from 'prop-types';

export {
  icons
};

/*
 * https://github.com/zamarrowski/react-ionicons#api
 */
const Icon = (props) => (
  <span
    className="icon"
    onClick={ props.onClick }
  >
    <Ionicon { ...props } />
  </span>
);

Icon.displayName = 'Icon';

Icon.propTypes = {
  onClick: PropTypes.func
};

export default Icon;
