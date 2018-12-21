import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const Caption = (props) => (
  <p
    className={
      classNames('caption', props.className)
    }
    style={ props.style }
  >
    { props.children }
  </p>
);

Caption.displayName = 'Caption';

Caption.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  style: PropTypes.object
};

export default Caption;
