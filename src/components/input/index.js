import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Autosuggest from 'react-autosuggest';
import throttle from 'lodash.throttle';
import Caption from '../caption';
import Icon from '../icon';

const Field = ({ inputRef, className, defaultValue, ...rest }) => (
  <input
    { ...rest }
    ref={ inputRef }
    defaultValue={ defaultValue }
    className={ className }
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
    <div
      className="input-suggestion-title-wrapper"
    >
      <div className="input-suggestion-title">
        { suggestion }
      </div>
    </div>
  </div>
);

Suggestion.displayName = 'Suggestion';

export const SuggestionWithImage = ({ image, title, caption }) => (
  <div
    className="input-suggestion input-suggestion-with-image"
  >
    <div className="input-suggestion-image">
      <img src={ image } alt={ title } />
    </div>
    <div
      className="input-suggestion-title-wrapper"
    >
      <div className="input-suggestion-title">
        { title }
      </div>
      <Caption className="input-suggestion-caption">
        { caption }
      </Caption>
    </div>
  </div>
);

SuggestionWithImage.displayName = 'SuggestionWithImage';

SuggestionWithImage.propTypes = {
  title: PropTypes.string,
  image: PropTypes.string,
  caption: PropTypes.string
};

class Input extends React.Component {
  constructor(props) {
    super(props);
    this.throttledHandleOnFetchRequested = throttle(this.handleOnFetchRequested, 400, {
      leading: false
    }).bind(this);
  }
  handleOnFetchRequested(...args) {
    this.props.onFetchRequested(...args);
  }
  render() {
    const props = this.props;
    const {
      suggestions,
      onClearRequested,
      getSuggestionValue,
      renderSuggestion,
      inputRef,
      onSuggestionSelected,
      alwaysRenderSuggestions,
      shouldRenderSuggestions,
      focusInputOnSuggestionClick,
      // eslint-disable-next-line
      onFetchRequested, error, limit, addTag, detailed, success,
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
          onSuggestionsFetchRequested={ this.throttledHandleOnFetchRequested }
          onSuggestionsClearRequested={ onClearRequested }
          getSuggestionValue={ getSuggestionValue }
          renderSuggestion={ renderSuggestion }
          onSuggestionSelected={ onSuggestionSelected }
          alwaysRenderSuggestions={ alwaysRenderSuggestions }
          shouldRenderSuggestions={ shouldRenderSuggestions }
          focusInputOnSuggestionClick={ focusInputOnSuggestionClick }
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
            'input--success': props.success,
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
        <div className="input-inner-wrapper">
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
              <Fragment>
                <span className="input-state-icon">
                  <Icon icon="ion-android-close" />
                </span>
                <span className="input-error-message">
                  { props.error.message }
                </span>
              </Fragment>
            )
          }
          {
            props.success && (
              <span className="input-state-icon">
                <Icon icon="ion-android-done" />
              </span>
            )
          }
        </div>
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
  success: PropTypes.bool,
  disabled: PropTypes.bool,
  placeholder: PropTypes.string,
  icon: PropTypes.node,
  type: PropTypes.string,
  required: PropTypes.bool,
  inputRef: PropTypes.func,
  label: PropTypes.node,
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
  shouldRenderSuggestions: PropTypes.func,
  focusInputOnSuggestionClick: PropTypes.func,
};

Input.displayName = 'Input';

export default Input;
