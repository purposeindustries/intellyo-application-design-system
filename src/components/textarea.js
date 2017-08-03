import React from 'react';
import PropTypes from 'prop-types';

const Textarea = (props) => (
  <textarea
    className="textarea"
    onChange={ props.onChange }
    placeholder={ props.placeholder }
    disabled={ props.disabled }
  />
);

Textarea.displayName = 'Textarea';

Textarea.defaultProps = {
  onChange: () => {}
};

Textarea.propTypes = {
  placeholder: PropTypes.string,
  disabled: PropTypes.bool,
  onChange: PropTypes.func
};

export default Textarea;
