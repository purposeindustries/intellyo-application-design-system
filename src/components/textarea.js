import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

class Textarea extends Component {
  static displayName = 'Textarea'

  static propTypes = {
    charLimit: PropTypes.number
  }

  constructor(props) {
    super(props);
    this.state = {
      charCount: this.props.charLimit
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    const lengthOfText = e.target.value.length;
    this.setState({
      charCount: lengthOfText === 0 ?
        this.props.charLimit
        : this.props.charLimit - lengthOfText
    });
  }

  render() {
    return (
      <div>
        <textarea onChange={ this.handleChange } placeholder="Text goes here..." />
        <span
          className={ classNames('char-counter', {
            'over-limit': this.state.charCount < 0
          }) }
        >
          { this.state.charCount }
        </span>
      </div>
    );
  }

}

export default Textarea;
