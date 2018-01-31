import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

const Box = ({ children, className }) => (
  <div className={ cx('box', className) }>
    { children }
  </div>
);

Box.displayName = 'Box';

Box.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

export default Box;
