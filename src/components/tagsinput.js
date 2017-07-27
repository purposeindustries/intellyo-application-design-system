import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ReactTagsInput from 'react-tagsinput';
import Button from './button';
import Icon from './icon';
import classNames from 'classnames';

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
            onChange = () => {},
            onBlur = () => {},
            ref = () => {},
            value,
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
              <input
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
                ref={ (el) => {
                  this.input = el;
                  ref(el);
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
