import React from 'react';
import Ionicon from 'react-ionicons';
import icons from 'react-ionicons/lib/icons';
import PropTypes from 'prop-types';
import cx from 'classnames';


export {
  icons
};

/*
 * https://github.com/zamarrowski/react-ionicons#api
 */
const Icon = (props) => {
  const { className, ...propsWithoutClassName } = props;
  return (
    <span
      className={ cx('icon', className) }
      onClick={ props.onClick }
    >
      <Ionicon { ...propsWithoutClassName } />
    </span>
  );
};

Icon.displayName = 'Icon';

Icon.propTypes = {
  onClick: PropTypes.func,
  className: PropTypes.string
};

export default Icon;
