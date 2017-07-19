import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

const DisplayText = (props) => {
  const Tag = props.tagName;
  return (
    <Tag
      className={
        classNames('display-text', {
          'display-text--small': props.size === 'small',
          'display-text--regular': props.size === 'regular',
          'display-text--large': props.size === 'large',
          'display-text--extra-large': props.size === 'extra-large',
        })
      }
    >
      { props.children }
    </Tag>
  );
};

DisplayText.displayName = 'DisplayText';

DisplayText.propTypes = {
  tagName: PropTypes.string,
  size: PropTypes.string,
  children: PropTypes.node
};

DisplayText.defaultProps = {
  tagName: 'p',
  size: 'regular'
};

export default DisplayText;
