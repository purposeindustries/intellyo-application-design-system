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
    isInputActive: PropTypes.bool,
    inputProps: PropTypes.object
  }
  static defaultProps = {
    value: [],
    onChange: () => {},
    isInputActive: false,
    inputProps: {}
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
          const { tag, key, disabled, onRemove, classNameRemove, getTagDisplayValue, ...other } = props;
          return (
            <div
              { ...other }
              className={
                classNames('tagsinput-tag', classNameRemove)
              }
              key={ key }
            >
              { getTagDisplayValue(tag) }
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
            onBlur = () => {},
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
              className={ classNames(className, 'tagsinput-input') }
              onBlur={ (e) => {
                this.setState({
                  isInputActive: false
                });
                onBlur(e);
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

          const suggestions = this.props.suggestions.filter((state) => {
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
                ref={ props.ref }
                suggestions={ suggestions }
                shouldRenderSuggestions={ (value) => value && value.trim().length > 0 }
                getSuggestionValue={ (suggestion) => suggestion.name }
                renderSuggestion={ renderSuggestion }
                inputProps={ {...props, onChange: handleOnChange} }
                renderInputComponent={ renderInputComponent }
                onSuggestionSelected={ (e, {suggestion}) => {
                  addTag(suggestion.name);
                  this.setState({
                    isInputActive: true
                  });
                  // focus() gets called before the render is over
                  // so we have to wait for rendering to take place
                  requestAnimationFrame(() => {
                    this.input.focus();
                  });
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
