import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

class CharLimit extends Component {
  static displayName = 'CharLimit'

  static propTypes = {
    limit: PropTypes.number.isRequired,
    children: PropTypes.element.isRequired
  }

  constructor(props) {
    super(props);
    this.state = {
      charCount: this.props.limit
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({
      charCount: this.props.limit - e.target.value.length
    });
  }

  render() {
    const childrenWithProps = React.Children.map(this.props.children,
      (child) => React.cloneElement(child, {
        onChange: this.handleChange
      }));
    return (
      <div className="char-limit">
        { childrenWithProps }
        { this.props.limit && (
          <span
            className={ classNames('char-counter', {
              'over-limit': this.state.charCount < 0
            }) }
          >
            { this.state.charCount }
          </span>
        ) }
      </div>
    );
  }
}

export default CharLimit;
