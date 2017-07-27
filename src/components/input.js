import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const Input = (props) => (
  <div className="input-wrapper">
    <input
      className={
        classNames('input', {
          'input--danger': props.danger,
          'input--neutral': props.neutral,
          'input--disabled': props.disabled
        })
      }
      placeholder={ props.placeholder }
    />
    {
      props.icon && (
        <span className="input-icon-wrapper">
          { props.icon }
        </span>
      )
    }
  </div>
);

Input.propTypes = {
  danger: PropTypes.boolean,
  neutral: PropTypes.boolean,
  disabled: PropTypes.boolean,
  placeholder: PropTypes.string,
  icon: PropTypes.node
};

Input.displayName = 'Input';

export default Input;
