import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Autosuggest from 'react-autosuggest';

const Field = (props) => (
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
    className={ props.className }
  />
);

Field.displayName = 'Field';

Field.propTypes = {
  ref: PropTypes.func,
  name: PropTypes.string,
  disabled: PropTypes.bool,
  className: PropTypes.string,
  defaultValue: PropTypes.string,
  onKeyDown: PropTypes.func,
  onBlur: PropTypes.func,
  value: PropTypes.string,
  onPaste: PropTypes.func,
  onChange: PropTypes.func,
  onFocus: PropTypes.func,
  id: PropTypes.string,
  type: PropTypes.string,
  required: PropTypes.bool,
  inputRef: PropTypes.func,
  placeholder: PropTypes.string
};

export const Suggestion = (suggestion) => (
  <div
    className="input-suggestion"
  >
    { suggestion }
  </div>
);

Suggestion.displayName = 'Suggestion';

export const SuggestionWithImage = ({ image, title }) => (
  <div
    className="input-suggestion input-suggestion-with-image"
  >
    <div className="input-suggestion-image">
      <img src={ image } alt={ title } />
    </div>
    <div className="input-suggestion-title">
      { title }
    </div>
  </div>
);

SuggestionWithImage.displayName = 'SuggestionWithImage';

SuggestionWithImage.propTypes = {
  title: PropTypes.string,
  image: PropTypes.string
};

class Input extends React.Component {
  render() {
    const props = this.props;
    const {
      suggestions,
      onFetchRequested,
      onClearRequested,
      getSuggestionValue,
      renderSuggestion,
      inputRef,
      onSuggestionSelected,
      ...inputProps
    } = props;
    let autosuggestField;
    if (suggestions) {
      autosuggestField = (
        <Autosuggest
          ref={ (autosuggest) => {
            if (autosuggest && typeof inputRef === 'function') {
              inputRef(autosuggest.input);
            }
          } }
          suggestions={ suggestions }
          onSuggestionsFetchRequested={ onFetchRequested }
          onSuggestionsClearRequested={ onClearRequested }
          getSuggestionValue={ getSuggestionValue }
          renderSuggestion={ renderSuggestion }
          onSuggestionSelected={ onSuggestionSelected }
          inputProps={ {
            ...inputProps,
            className: classNames(inputProps.className,
              'input-autosuggest'
            ),
            onChange: (e, { newValue, method }) => {
              if (typeof inputProps.onChange === 'function') {
                inputProps.onChange(e, { newValue, method });
              }
            }
          } }
        />
      );
    }
    const field = (
      <Field
        inputRef={ inputRef }
        { ...inputProps }
      />
    );
    return (
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
        { autosuggestField || field }
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
  }
}

Input.defaultProps = {
  type: 'text',
  required: false,
  disabled: false,
  // Autosuggest:
  onFetchRequested: () => {},
  onClearRequested: () => {},
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
  defaultValue: PropTypes.string,
  // Autosuggest:
  suggestions: PropTypes.arrayOf(
    PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.shape({
        image: PropTypes.string,
        title: PropTypes.string
      })
    ])
  ),
  onFetchRequested: PropTypes.func,
  onClearRequested: PropTypes.func,
};

Input.displayName = 'Input';

export default Input;
