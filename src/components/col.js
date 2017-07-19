import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const Col = (props) => (
  <div className={ classNames('col', `col-${props.span}`) } style={ props.style }>
    { props.children }
  </div>
);

Col.displayName = 'GridCol';

Col.propTypes = {
  span: PropTypes.number,
  style: PropTypes.object,
  children: PropTypes.node
};

Col.defaultProps = {
  span: 1
};

export default Col;
