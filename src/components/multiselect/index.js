import React from 'react';
import PropTypes from 'prop-types';
import Dropdown from '../dropdown';

const { string, bool, array, func, node } = PropTypes;

export default class Multiselect extends React.Component {
  static displayName = 'Multiselect';

  static propTypes = {
    id: string,
    onChange: func,
    selected: array,
    isActive: bool,
    children: node,
    defaultLabel: string,
  };

  static defaultProps = {
    onChange: () => {},
    defaultLabel: 'Nothing selected',
    selected: [],
  }

  constructor(props) {
    super(props);
    this.state = {
      label: this.props.defaultLabel,
      isActive: props.isActive
    };
  }

  getLabel = (selected) => {
    if (selected.length === 0) {
      return this.props.defaultLabel;
    } else if (selected.length === 1) {
      return this._options[selected[0]].props.children;
    }
    return `${selected.length} selected`;
  }

  componentWillReceiveProps(props) {
    if (props.selected !== this.props.selected) {
      this.setState({
        label: this.getLabel(props.selected)
      });
    }
  }

  componentDidMount() {
    setTimeout(() => this.setState({
      label: this.getLabel(this.props.selected)
    }));
  }

  _options = {}

  render() {
    return (
      <div>
        <Dropdown
          label={ this.state.label }
          isActive={ this.state.isActive }
          className="multiselect"
        >
          {
            React.Children.map(this.props.children, (c) => {
              if (c.type.displayName === 'Option') {
                this._options[c.props.value] = c;
                return React.cloneElement(c, {
                  onClick: (e) => {
                    if (c.props.onClick) {
                      c.props.onClick(e);
                    }
                    this.props.onChange(c.props.value, c.props.children);
                  },
                  checked: this.props.selected.includes(c.props.value)
                });
              }
              return React.cloneElement(c);
            })
          }
        </Dropdown>
      </div>
    );
  }
}
