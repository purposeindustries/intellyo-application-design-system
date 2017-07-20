import React from 'react';
import Ionicon from 'react-ionicons';
import icons from 'react-ionicons/lib/icons';

export {
  icons
};

/*
 * https://github.com/zamarrowski/react-ionicons#api
 */
const Icon = (props) => (
  <Ionicon { ...props } />
);

Icon.displayName = 'Icon';

export default Icon;
