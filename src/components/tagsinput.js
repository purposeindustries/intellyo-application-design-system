import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ReactTagsInput from 'react-tagsinput';
import Button from './button';
import Input, { SuggestionWithImage } from './input';
import Icon from './icon';
import classNames from 'classnames';

export const Tag = (props) => {
  const { tag, key, disabled, onRemove, classNameRemove, getTagDisplayValue, ...other } = props;
  const remove = (
    <Icon
      fontSize="15px"
      className="tagsinput-remove"
      onClick={ () => onRemove(key) }
      icon="ion-android-close"
    />
  );

  if (typeof tag === 'string') {
    return (
      <div
        { ...other }
        className={
          classNames('tagsinput-tag', classNameRemove)
        }
        key={ key }
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
        classNames('tagsinput-tag', 'tagsinput-tag-with-image', classNameRemove)
      }
      key={ key }
    >
      <img src={ tag.image } alt={ tag.title } />
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
};

Tag.displayName = 'Tag';

Tag.propTypes = {
  tag: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.shape({
      title: PropTypes.string,
      image: PropTypes.string,
      caption: PropTypes.string,
    })
  ]),
  key: PropTypes.func,
  disabled: PropTypes.bool,
  onRemove: PropTypes.func,
  classNameRemove: PropTypes.string,
  getTagDisplayValue: PropTypes.func
};

class TagsInput extends Component {
  static displayName = 'TagsInput'
  static propTypes = {
    value: PropTypes.array,
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
        className={ classNames('tagsinput', {
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
        renderTag={ Tag }
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
              <Input
                suggestions={ [{
                  image: 'https://yt3.ggpht.com/-kjvQ93RHls8/AAAAAAAAAAI/AAAAAAAAAAA/R-e1VQdsqVs/s48-c-k-no-mo-rj-c0xffffff/photo.jpg',
                  title: 'Volvo'
                }] }
                getSuggestionValue={ (suggestion) => {
                  return suggestion;
                } }
                renderSuggestion={ SuggestionWithImage }
                onSuggestionSelected={ (e, { suggestion }) => {
                  addTag(suggestion);
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
