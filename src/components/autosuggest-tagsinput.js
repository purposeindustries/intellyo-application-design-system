import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ReactTagsInput from 'react-tagsinput';
import Button from './button';
import Input from './input';
import Icon from './icon';
import classNames from 'classnames';
import Autosuggest from 'react-autosuggest';

class AutoSuggestTagsInput extends Component {
  static displayName = 'AutoSuggestTagsInput'
  static propTypes = {
    value: PropTypes.array,
    suggestions: PropTypes.array,
    onChange: PropTypes.func,
    renderTag: PropTypes.func,
    compare: PropTypes.func,
    transformSuggestion: PropTypes.func,
    isInputActive: PropTypes.bool,
    highlightFirstSuggestion: PropTypes.bool,
    onlyUnique: PropTypes.bool,
    inputProps: PropTypes.object,
    ref: PropTypes.func,
    allowCustomValues: PropTypes.bool
  }
  static defaultProps = {
    value: [],
    onChange: () => {},
    isInputActive: false,
    inputProps: {},
    compare: (a, b) => a !== b
  }
  constructor(props) {
    super(props);
    this.state = {
      value: props.value,
      isInputActive: props.isInputActive
    };
  }
  render() {
    return (
      <ReactTagsInput
        ref={ (instance) => {
          this._tagsInput = instance;
        } }
        { ...this.props }
        className={ classNames('tagsinput autosuggest-tagsinput', {
          'tagsinput--input-visible': this.state.isInputActive
        }) }
        value={ this.state.value }
        onChange={ (tags) => {
          this.setState((state) => {
            return {
              ...state,
              value: [...tags]
            };
          });
          this.props.onChange(tags);
        } }
        renderTag={ (props) => {
          const { tag, key, disabled, onRemove, classNameRemove, ...other } = props;
          // React warning: Remove getTagDisplayValue from <div> tag
          delete props.getTagDisplayValue;
          return (
            <div
              { ...other }
              className={
                classNames('autosuggest-tagsinput-tag tagsinput-tag', classNameRemove)
              }
              key={ key }
            >
              { this.props.renderTag(tag) }
              {
                !disabled && (
                  <Icon
                    fontSize="15px"
                    className="tagsinput-remove"
                    onClick={ () => onRemove(key) }
                    icon="ion-android-close"
                  />
                )
              }
            </div>
          );
        } }
        renderInput={ (props) => {
          const {
            onBlur,
            inputRef = () => {},
            // https://github.com/olahol/react-tagsinput#how-do-i-fix-warning-unknown-prop-addtag
            // eslint-disable-next-line no-unused-vars
            addTag,
            className
          } = props;


          const handleOnChange = (e, {method}) => {
            if (method === 'enter') {
              e.preventDefault();
            } else {
              props.onChange(e);
            }
          };
          const renderInputComponent = (inputProps) => (
            <Input
              { ...inputProps }
              onKeyDown={ (e) => {
                if (e.keyCode === 9 || e.keyCode === 13) {
                  e.preventDefault();
                  const suggestion = this._autoSuggest.getHighlightedSuggestion();
                  if (!suggestion && this.props.allowCustomValues) {
                    addTag(this.props.transformSuggestion(this.input.value));
                  } else if (suggestion) {
                    addTag(this.props.transformSuggestion(suggestion));
                  }
                  this.setState({
                    isInputActive: true
                  }, () => this.input.focus());
                }
                if (e.keyCode === 13) {
                  return;
                }
                inputProps.onKeyDown(e);
              } }
              className={ classNames(className, 'tagsinput-input') }
              onBlur={ (e) => {
                this.setState({
                  isInputActive: false
                }, () => {
                  onBlur(e);
                  requestAnimationFrame(() => {
                    this._autoSuggest.closeSuggestions();
                    this._tagsInput.clearInput();
                  });
                });
              } }
              inputRef={ (el) => {
                this.input = el;
                inputRef(el);
                inputProps.ref(el);
              } }
            />
          );
          const renderSuggestion = (suggestion) => (
            <div className="autosuggest-wrap">
              <img
                src={ suggestion.photoSrc }
                alt={ suggestion.name }
                className="autosuggest-image"
              />
              <span className="autosuggest-value">{ suggestion.name }</span>
            </div>
          );
          const inputValue = (props.value && props.value.trim().toLowerCase()) || '';
          const inputLength = inputValue.length;

          let suggestions = [];

          if (this.props.onlyUnique) {
            if (this.state.value.length === 0) {
              suggestions = this.props.suggestions;
            } else {
              suggestions = this.props.suggestions.filter((n) => {
                return this.state.value.every((j) => this.props.compare(n, j));
              });
            }
          } else {
            suggestions = this.props.suggestions;
          }

          const filteredSuggestions = suggestions.filter((state) => {
            return state.name.toLowerCase().slice(0, inputLength) === inputValue;
          });
          return (
            <div className="tagsinput-input-controls">
              <Button
                icon={ (
                  <Icon icon="ion-android-add" />
                ) }
                onClick={ () => {
                  this.setState({
                    isInputActive: true
                  }, () => {
                    this.input.focus();
                  });
                } }
                className="tagsinput-add-tag"
              />
              <Autosuggest
                type="text"
                ref={ (instance) => {
                  this._autoSuggest = instance;
                  props.ref(instance);
                } }
                highlightFirstSuggestion={ this.props.highlightFirstSuggestion }
                suggestions={ filteredSuggestions }
                shouldRenderSuggestions={ (value) => value && value.trim().length > 0 }
                getSuggestionValue={ (suggestion) => suggestion.name }
                renderSuggestion={ renderSuggestion }
                inputProps={ {...props, onChange: handleOnChange} }
                renderInputComponent={ renderInputComponent }
                onSuggestionSelected={ (e, {suggestion}) => {
                  addTag(this.props.transformSuggestion(suggestion));
                  this.setState({
                    isInputActive: true
                  }, () => this.input.focus());
                } }
                onSuggestionsClearRequested={ () => {} }
                onSuggestionsFetchRequested={ () => {} }
              />
            </div>
          );
        } }
      />
    );
  }
}

export default AutoSuggestTagsInput;
