import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const Textarea = (props) => (
  <textarea
    className={ classNames('textarea', {
      'textarea--disabled': props.disabled
    }) }
    onChange={ props.onChange }
    placeholder={ props.placeholder }
    disabled={ props.disabled }
  />
);

Textarea.displayName = 'Textarea';

Textarea.propTypes = {
  placeholder: PropTypes.string,
  disabled: PropTypes.bool,
  onChange: PropTypes.func
};

export default Textarea;
