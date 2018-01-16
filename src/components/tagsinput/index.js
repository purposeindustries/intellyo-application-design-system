import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ReactTagsInput from 'react-tagsinput';
import HideAt from 'react-hide-at';
import ShowAt from 'react-show-at';
import Button from '../button';
import Input from '../input';
import Icon from '../icon';
import classNames from 'classnames';

export const StandAloneInput = (props) => {
  return (
    <div className="tagsinput-input-controls">
      <Input
        { ...props }
        type="text"
        icon={ <Icon icon="ion-android-add" /> }
      />
    </div>
  );
};

StandAloneInput.displayName = 'StandAloneInput';

export class DefaultInput extends React.Component {
  static displayName = 'DefaultInput';
  static propTypes = {
    detailed: PropTypes.bool,
    inputRef: PropTypes.func,
    onBlur: PropTypes.func,
    isActive: PropTypes.bool,
    onAddButtonClick: PropTypes.func,
    disabled: PropTypes.bool
  }
  static defaultProps = {
    onAddButtonClick: () => {}
  }
  constructor(props) {
    super(props);
    this.state = {
      isActive: !!props.isActive
    };
  }
  componentWillReceiveProps(next) {
    if (typeof next.isActive !== 'undefined' && next.isActive !== this.state.isActive) {
      this.setState({
        isActive: next.isActive
      });
    }
  }
  render() {
    const {
      // eslint-disable-next-line no-unused-vars
      isActive,
      onAddButtonClick,
      ...inputProps
    } = this.props;
    return (
      <div
        className={ classNames('tagsinput-input-controls tagsinput-default-input', {
          'tagsinput-default-input--active': this.state.isActive
        }) }
      >
        <Button
          size={ this.props.detailed ? 'large' : 'normal' }
          icon={ (
            <Icon
              icon="ion-android-add"
            />
          ) }
          onClick={ () => {
            if (!this.props.disabled) {
              this.setState({
                isActive: true
              }, () => this.input.focus());
            }
            onAddButtonClick();
          } }
          className="tagsinput-add-tag"
        />
        <Input
          { ...inputProps }
          type="text"
          inputRef={ (el) => {
            this.input = el;
            if (typeof this.props.inputRef === 'function') {
              this.props.inputRef(el);
            }
          } }
          onBlur={ () => {
            this.setState({
              isActive: false
            });
            if (typeof this.props.onBlur === 'function') {
              this.props.onBlur();
            }
          } }
        />
      </div>
    );
  }
}

export default class TagsInput extends Component {
  static displayName = 'TagsInput';

  static propTypes = {
    className: PropTypes.string,
    value: PropTypes.array,
    onChange: PropTypes.func,
    onChangeInput: PropTypes.func,
    size: PropTypes.string,
    inputProps: PropTypes.object,
    detailed: PropTypes.bool,
    inputValue: PropTypes.string,
    validationRegex: PropTypes.instanceOf(RegExp),
    renderInput: PropTypes.func.isRequired,
    onSuggestionSelected: PropTypes.func,
    colors: PropTypes.arrayOf(PropTypes.string),
    addKeys: PropTypes.arrayOf(PropTypes.number),
    tagsInputRef: PropTypes.func,
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
    size: 'normal',
    onChange: () => {},
    inputProps: {},
    onSuggestionSelected: () => {},
    colors: [],
    tagsInputRef: () => {},
  }

  constructor(props) {
    super(props);
    this.state = {
      value: props.value,
    };
  }

  render() {
    return (
      <ReactTagsInput
        { ...this.props }
        ref={ this.props.tagsInputRef }
        className={ classNames('tagsinput', this.props.className, {
          'tagsinput--detailed': !!this.props.detailed,
          [`tagsinput--size-${this.props.size}`]: true
        }) }
        value={ this.props.value }
        onChangeInput={ this.props.onChangeInput }
        inputValue={ this.props.inputValue }
        onChange={ (tags) => {
          if (this.props.colors && this.props.colors.length) {
            tags = tags.map((tag, i) => {
              return {
                ...tag,
                color: this.props.colors[i % this.props.colors.length]
              };
            });
          }
          this.props.onChange(tags);
        } }
        addKeys={ this.props.addKeys }
        validationRegex={ this.props.validationRegex }
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
            // https://github.com/olahol/react-tagsinput#how-do-i-fix-warning-unknown-prop-addtag
            // eslint-disable-next-line no-unused-vars
            addTag,
            onChange = () => {},
            value = ''
          } = props;
          const input = this.props.renderInput(props);
          return (
            <div className="tagsinput-input-controls-wrapper">
              { input && React.cloneElement(input, {
                onSuggestionSelected: (e, { suggestion }) => {
                  if (typeof input.props.onSuggestionSelected === 'function') {
                    input.props.onSuggestionSelected(e, { suggestion, addTag });
                  }
                },
                detailed: this.props.detailed,
                onChange: onChange,
                value: value,
                className: classNames(input.props.className, 'tagsinput-input')
              }) }
            </div>
          );
        } }
      />
    );
  }
}

export const ResponsiveTagsInput = (props) => (
  <div className="responsive-tagsinput">
    <HideAt
      breakpoint="small"
      breakpoints={ props.breakpoints }
    >
      <TagsInput
        { ...props }
        renderInput={ props.renderDefaultInput }
        size="normal"
      />
    </HideAt>
    <ShowAt
      breakpoint="small"
      breakpoints={ props.breakpoints }
    >
      <TagsInput
        { ...props }
        renderInput={ props.renderStandAloneInput }
        size="small"
      />
    </ShowAt>
  </div>
);

ResponsiveTagsInput.propTypes = {
  breakpoints: PropTypes.object,
  renderStandAloneInput: PropTypes.func,
  renderDefaultInput: PropTypes.func,
  size: PropTypes.string,
  value: PropTypes.array,
  onChange: PropTypes.func
};

ResponsiveTagsInput.displayName = 'ResponsiveTagsInput';
