import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const Textarea = (props) => (
  <textarea
    name={ props.name }
    className={ classNames('textarea', {
      'textarea--disabled': props.disabled
    }) }
    onChange={ props.onChange }
    placeholder={ props.placeholder }
    disabled={ props.disabled }
    value={ props.value }
    defaultValue={ props.defaultValue }
  />
);

Textarea.displayName = 'Textarea';

Textarea.propTypes = {
  name: PropTypes.string,
  placeholder: PropTypes.string,
  disabled: PropTypes.bool,
  value: PropTypes.string,
  defaultValue: PropTypes.string,
  onChange: PropTypes.func
};

export default Textarea;
