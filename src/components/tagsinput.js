import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ReactTagsInput from 'react-tagsinput';
import Button from './button';
import Input from './input';
import Icon from './icon';
import classNames from 'classnames';

class TagsInput extends Component {
  static displayName = 'TagsInput'
  static propTypes = {
    className: PropTypes.string,
    value: PropTypes.array,
    onChange: PropTypes.func,
    isInputActive: PropTypes.bool,
    inputProps: PropTypes.object,
    detailed: PropTypes.bool,
    onSuggestionSelected: PropTypes.func,
    colors: PropTypes.arrayOf(PropTypes.string),
    addKeys: PropTypes.arrayOf(PropTypes.number),
    suggestions: PropTypes.arrayOf(
      PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.shape({
          image: PropTypes.string,
          title: PropTypes.string,
          caption: PropTypes.string,
        })
      ])
    ),
    getSuggestionValue: PropTypes.func,
    renderSuggestion: PropTypes.func,
    onFetchRequested: PropTypes.func,
    onClearRequested: PropTypes.func,
  }
  static defaultProps = {
    value: [],
    onChange: () => {},
    isInputActive: false,
    inputProps: {},
    onSuggestionSelected: () => {},
    colors: []
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
        className={ classNames('tagsinput', this.props.className, {
          'tagsinput--input-visible': this.state.isInputActive,
          'tagsinput--detailed': !!this.props.detailed
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
        addKeys={ this.props.addKeys }
        renderTag={ (props) => {
          const { tag, key, disabled, onRemove, classNameRemove, getTagDisplayValue, ...other } = props;
          const remove = (
            <Icon
              fontSize="15px"
              className="tagsinput-tag-remove"
              onClick={ () => onRemove(key) }
              icon="ion-android-close"
            />
          );
          const style = {
            backgroundColor: this.props.colors.length
              ? this.props.colors[key % this.props.colors.length]
              : undefined
          };

          if (typeof tag === 'string') {
            return (
              <div
                { ...other }
                className={
                  classNames('tagsinput-tag', classNameRemove)
                }
                key={ key }
                style={ style }
              >
                { getTagDisplayValue(tag) }
                { !disabled && remove }
              </div>
            );
          }
          return (
            <div
              { ...other }
              className={
                classNames('tagsinput-tag', classNameRemove)
              }
              key={ key }
              style={ style }
            >
              <div className="tagsinput-tag-image">
                <img src={ tag.image } alt={ tag.title } />
              </div>
              <div className="tagsinput-tag-info-box">
                <div className="tagsinput-tag-info-title">
                  { getTagDisplayValue(tag.title) }
                </div>
                { tag.caption && (
                  <div className="tagsinput-tag-info-caption">
                    { tag.caption }
                  </div>
                ) }
              </div>
              { !disabled && remove }
            </div>
          );
        } }
        renderInput={ (props) => {
          const {
            onChange = () => {},
            onBlur = () => {},
            inputRef = () => {},
            value = '',
            // https://github.com/olahol/react-tagsinput#how-do-i-fix-warning-unknown-prop-addtag
            // eslint-disable-next-line no-unused-vars
            addTag,
            className,
            ...other
          } = props;
          return (
            <div className="tagsinput-input-controls">
              <Button
                size={ this.props.detailed ? 'large' : 'normal' }
                icon={ (
                  <Icon
                    icon="ion-android-add"
                  />
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
              <Input
                suggestions={ this.props.suggestions }
                onFetchRequested={ this.props.onFetchRequested }
                onClearRequested={ this.props.onClearRequested }
                getSuggestionValue={ this.props.getSuggestionValue }
                renderSuggestion={ this.props.renderSuggestion }
                onSuggestionSelected={ (e, { suggestion }) => {
                  this.props.onSuggestionSelected(e, {
                    suggestion,
                    addTag
                  });
                } }

                type="text"
                onChange={ onChange }
                value={ value }
                { ...other }
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
                } }
                placeholder={ this.props.inputProps.placeholder }
              />
            </div>
          );
        } }
      />
    );
  }
}

export default TagsInput;
