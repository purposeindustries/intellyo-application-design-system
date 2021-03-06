import React from 'react';
import PropTypes from 'prop-types';
import Input from '../input';
import Select from '../select';
import classNames from 'classnames';

export const PrefixedItem = (props) => (
  <div
    className={
      classNames('prefixed-item', props.className)
    }
    onClick={ props.onClick }
    onMouseDown={ props.onMouseDown }
    id={ props.id }
  >
    { props.children }
  </div>
);

PrefixedItem.displayName = 'PrefixedItem';
PrefixedItem.propTypes = {
  color: PropTypes.string,
  onClick: PropTypes.func,
  onMouseDown: PropTypes.func,
  id: PropTypes.string,
  children: PropTypes.string,
  defaultValue: PropTypes.bool,
  className: PropTypes.string
};

class PrefixedInput extends React.Component {
  static displayName = 'PrefixedInput';
  static propTypes = {
    inputProps: PropTypes.object,
    children: PropTypes.oneOfType(
      [PropTypes.element, PropTypes.arrayOf(PropTypes.element)]
    ),
    suggestions: PropTypes.array,
    onFetchRequested: PropTypes.func,
    onSuggestionSelected: PropTypes.func,
    onClearRequested: PropTypes.func,
    renderSuggestion: PropTypes.func,
    getSuggestionValue: PropTypes.func,
    value: PropTypes.string,
    prefixValue: PropTypes.string,
    onChange: PropTypes.func,
    color: PropTypes.string,
    className: PropTypes.string,
    onSelectChange: PropTypes.func,
    onInputChange: PropTypes.func
  }
  constructor(props) {
    super(props);
    this.state = {
      prefixValue: props.prefixValue
    };
  }
  componentWillMount() {
    const count = React.Children.count(this.props.children);
    if (!this.state.prefixValue && count) {
      const children = count === 1 ? [this.props.children] : this.props.children;
      this.setState({
        prefixValue: children[0].props.value
      });
    }
  }
  render() {
    return (
      <div
        className={ classNames('prefixed-input', this.props.className, {
          [`prefixed-input-${this.state.prefixValue}`]: true
        }) }

      >
        <Select
          value={ this.state.prefixValue }
          onChange={ (value, id, childrenValue) => {
            this.setState({
              prefixValue: value
            });
            if (this.props.onSelectChange) {
              this.props.onSelectChange(childrenValue);
            }
          } }
        >
          { this.props.children }
        </Select>
        <Input
          { ...this.props.inputProps }
          onSuggestionSelected={ this.props.onSuggestionSelected }
          suggestions={ this.props.suggestions }
          onFetchRequested={ this.props.onFetchRequested }
          onClearRequested={ this.props.onClearRequested }
          renderSuggestion={ this.props.renderSuggestion }
          getSuggestionValue={ this.props.getSuggestionValue }
          value={ this.props.value }
          onChange={ this.props.onInputChange }
        />
      </div>
    );
  }
}

export default PrefixedInput;
