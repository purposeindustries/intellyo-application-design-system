import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const Input = (props) => (
  <div
    className={
      classNames('input', props.className, {
        'input--error': props.error,
        'input--disabled': props.disabled,
        'input--icon': props.icon
      })
    }
  >
    {
      props.label && (
        <label className="input-label">{ props.label }</label>
      )
    }
    <input
      ref={ props.inputRef }
      name={ props.name }
      disabled={ props.disabled }
      placeholder={ props.placeholder }
      required={ props.required }
      type={ props.type }
      id={ props.id }
      onChange={ props.onChange }
      onPaste={ props.onPaste }
      onFocus={ props.onFocus }
      onBlur={ props.onBlur }
      onKeyDown={ props.onKeyDown }
      value={ props.value }
      defaultValue={ props.defaultValue }
    />
    {
      props.icon && (
        <span className="input-icon-wrapper">
          { props.icon }
        </span>
      )
    }
    {
      props.error && (
        <span className="input-error-message">
          { props.error.message }
        </span>
      )
    }
  </div>
);

Input.defaultProps = {
  type: 'text',
  required: false,
  disabled: false
};

Input.propTypes = {
  name: PropTypes.string,
  className: PropTypes.string,
  id: PropTypes.string,
  error: PropTypes.shape({
    message: PropTypes.string.isRequired
  }),
  disabled: PropTypes.bool,
  placeholder: PropTypes.string,
  icon: PropTypes.node,
  type: PropTypes.string,
  required: PropTypes.bool,
  inputRef: PropTypes.func,
  label: PropTypes.string,
  onChange: PropTypes.func,
  onBlur: PropTypes.func,
  onKeyDown: PropTypes.func,
  onPaste: PropTypes.func,
  onFocus: PropTypes.func,
  value: PropTypes.string,
  defaultValue: PropTypes.string
};

Input.displayName = 'Input';

export default Input;
