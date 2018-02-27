import React from 'react';
import PropTypes from 'prop-types';
import Dropdown from '../dropdown';
import classnames from 'classnames';

export default class Select extends React.Component {
  static propTypes = {
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    children: PropTypes.oneOfType([PropTypes.element, PropTypes.arrayOf(PropTypes.element)]),
    id: PropTypes.string,
    style: PropTypes.object,
    icon: PropTypes.element,
    label: PropTypes.node,
    className: PropTypes.string,
  }
  static defaultProps = {
    onChange: () => {}
  }
  static displayName = 'Select';

  state = {}

  getLabel() {
    if (typeof this.props.value !== 'undefined') {
      const children = React.Children.toArray(this.props.children);
      const selected = children.find((child) => {
        return child.props.value === this.props.value;
      });
      if (selected) {
        return selected.props.children;
      }
    }
  }
  render() {
    return (
      <div
        className={ classnames('select-wrapper', this.props.className, {
          'select-wrapper--empty': !this.state.label && !this.props.label
        }) }
      >
        { this.props.label && (
          <div className="select-label">{ this.props.label }</div>
        ) }
        <Dropdown
          label={ this.getLabel() }
          isActive={ this.state.isActive }
          className="select"
          style={ this.props.style }
          icon={ this.props.icon }
        >
          {
            React.Children.map(this.props.children, (c) => {
              return React.cloneElement(c, {
                onClick: (e) => {
                  if (c.props.onClick) {
                    c.props.onClick(e);
                  }
                  if (this.props.value !== c.props.value) {
                    this.props.onChange(c.props.value, this.props.id, c.props.children);
                  }
                  this.setState({
                    label: c.props.children,
                    isActive: false
                  });
                }
              });
            })
          }
        </Dropdown>
      </div>
    );
  }
}
