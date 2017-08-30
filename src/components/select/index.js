import React from 'react';
import PropTypes from 'prop-types';
import Dropdown from '../dropdown';
import classNames from 'classnames';

export default class Select extends React.Component {
  static propTypes = {
    label: PropTypes.string,
    value: PropTypes.string,
    children: PropTypes.oneOfType([PropTypes.element, PropTypes.arrayOf(PropTypes.element)]),
    onChange: PropTypes.func,
    id: PropTypes.string,
    isActive: PropTypes.bool,
    style: PropTypes.obj
  }
  static defaultProps = {
    onChange: () => {}
  }
  static displayName = 'Select';
  constructor(props) {
    super(props);
    this.state = {
      label: props.label,
      value: props.value,
      isActive: props.isActive
    };
  }
  getLabel() {
    if (typeof this.state.value !== 'undefined') {
      const children = React.Children.toArray(this.props.children);
      const selected = children.find((child) => {
        return child.props.value === this.state.value;
      });
      if (selected) {
        return selected.props.children;
      }
    }
  }
  componentWillMount() {
    if (!this.state.value) {
      this.setState({
        value: this.props.children[0].props.value
      });
    }
  }
  componentWillReceiveProps(props) {
    if (typeof props.value !== 'undefined' && props.value !== this.state.value) {
      this.setState({
        value: props.value
      });
    }
  }
  render() {
    return (
      <Dropdown
        label={ this.getLabel() }
        isActive={ this.state.isActive }
        className={ classNames('select') }
        style={ this.props.style }
      >
        {
          React.Children.map(this.props.children, (c) => {
            return React.cloneElement(c, {
              onClick: (e) => {
                if (c.props.onClick) {
                  c.props.onClick(e);
                }
                if (this.state.value !== c.props.value) {
                  this.props.onChange(c.props.value, this.props.id, c.props.children);
                }
                this.setState({
                  label: c.props.children,
                  value: c.props.value,
                  isActive: false
                });
              }
            });
          })
        }
      </Dropdown>
    );
  }
}
