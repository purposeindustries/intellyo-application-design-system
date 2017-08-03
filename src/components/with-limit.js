import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

export default function withLimit(Component) {
  function charLimit(props) {
    return (
      <div className="char-limit">
        <Component
          { ...props }
        />
        <span
          className={ classNames('char-counter', {
            'over-limit': props.limit - props.value.length < 0
          }) }
        >
          { props.limit - props.value.length }
        </span>
      </div>
    );
  }

  charLimit.propTypes = {
    limit: PropTypes.number.isRequired,
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired
  };

  charLimit.displayName = `withLimit(${Component.displayName
    || Component.name
    || 'Component'
  })`;

  return charLimit;

}
