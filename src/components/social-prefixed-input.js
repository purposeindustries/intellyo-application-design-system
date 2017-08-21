import React from 'react';
import PropTypes from 'prop-types';
import PrefixedInput from './prefixed-input';
import classNames from 'classnames';

const SocialPrefixedInput = (props) => (
  <PrefixedInput
    { ...props }
    className={ classNames(props.className, 'social-prefixed-input') }
  >
    { props.children }
  </PrefixedInput>
);

SocialPrefixedInput.displayName = 'SocialPrefixedInput';

SocialPrefixedInput.propTypes = {
  className: PropTypes.string,
  children: PropTypes.oneOfType(
    [PropTypes.element, PropTypes.arrayOf(PropTypes.element)])
};

export default SocialPrefixedInput;
