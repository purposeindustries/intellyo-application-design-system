import React from 'react';
import PropTypes from 'prop-types';
import Dropdown from '../components/dropdown';

export default class Select extends React.Component {
  static propTypes = {
    label: PropTypes.string,
    value: PropTypes.string,
    children: PropTypes.oneOfType([PropTypes.element, PropTypes.arrayOf(PropTypes.element)]),
    onChange: PropTypes.func
  }
  static displayName = 'Select';
  constructor(props) {
    super(props);
    this.state = {
      label: props.label,
      value: props.value
    };
  }
  render() {
    return (
      <Dropdown
        isSplit={ false }
        label={ this.state.label }
      >
        {
          React.Children.map(this.props.children, (c) => {
            return React.cloneElement(c, {
              onClick: (e) => {
                if (c.props.onClick) {
                  c.props.onClick(e);
                }
                if (this.state.value !== c.props.value) {
                  this.props.onChange(c.props.value);
                }
                this.setState({
                  label: c.props.children,
                  value: c.props.value
                });
              }
            });
          })
        }
      </Dropdown>
    );
  }
}
