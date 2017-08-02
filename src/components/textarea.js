import React from 'react';
import PropTypes from 'prop-types';

const Textarea = (props) => (
  <textarea
    className="textarea"
    onChange={ (e) => props.onChange(e) }
    placeholder={ props.placeholder }
  />
);

Textarea.displayName = 'Textarea';

Textarea.defaultProps = {
  onChange: () => {}
};

Textarea.propTypes = {
  placeholder: PropTypes.string,
  onChange: PropTypes.func
};

export default Textarea;
