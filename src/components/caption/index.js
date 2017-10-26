import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const Caption = (props) => (
  <p
    className={
      classNames('caption', props.className)
    }
  >
    { props.children }
  </p>
);

Caption.displayName = 'Caption';

Caption.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string
};

export default Caption;
