import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const Input = (props) => (
  <div className="input-wrapper">
    <input
      className={
        classNames('input', {
          'input--error': props.error,
          'input--disabled': props.disabled,
          'input--icon': props.icon
        })
      }
      disabled={ props.disabled }
      placeholder={ props.placeholder }
      required={ props.required }
      type={ props.type }
    />
    {
      props.icon && (
        <span className="input-icon-wrapper">
          { props.icon }
        </span>
      )
    }
    {
      props.error && props.errorMessage && (
        <span className="input-error-message">
          { props.errorMessage }
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
  error: PropTypes.bool,
  errorMessage: PropTypes.string,
  disabled: PropTypes.bool,
  placeholder: PropTypes.string,
  icon: PropTypes.node,
  type: PropTypes.string,
  required: PropTypes.bool
};

Input.displayName = 'Input';

export default Input;
