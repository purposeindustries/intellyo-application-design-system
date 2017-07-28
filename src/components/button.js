import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const Button = (props) => (
  <button
    className={
      classNames('button', props.className, {
        'button--danger': props.danger,
        'button--neutral': props.neutral,
        'button--disabled': props.disabled,
        [`button--${props.size}`]: true
      })
    }
    onClick={ (e) => {
      if (!props.disabled) {
        props.onClick(e);
      }
    } }
  >
    {
      props.icon && (
        <span className="button-icon-wrapper">
          { React.cloneElement(props.icon, {
            fontSize: (() => {
              switch (props.size) {
                case 'small':
                  return 12;
                case 'large':
                  return 20;
                default:
                  return 15;
              }
            })()
          }) }
        </span>
      )
    }
    {
      props.children && (
        <span className="button-content">{ props.children }</span>
      )
    }
  </button>
);

Button.displayName = 'Button';

Button.propTypes = {
  danger: PropTypes.bool,
  neutral: PropTypes.bool,
  disabled: PropTypes.bool,
  size: PropTypes.oneOf(['small', 'normal', 'large']),
  children: PropTypes.node,
  icon: PropTypes.node,
  onClick: PropTypes.func,
  className: PropTypes.string
};

Button.defaultProps = {
  onClick: () => {},
  size: 'normal'
};

export default Button;
