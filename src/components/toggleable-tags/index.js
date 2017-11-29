import React from 'react';
import PropTypes from 'prop-types';
import Button from '../button';

export default class ToggleableTags extends React.PureComponent {
  static displayName = 'ToggleableTags';

  static propTypes = {
    tags: PropTypes.arrayOf(PropTypes.shape({
      title: PropTypes.string.isRequired,
      value: PropTypes.string.isRequired
    })),
    onChange: PropTypes.func
  }

  state = {
    selected: ''
  }

  handleClick = (tag) => {
    const onChange = () => {
      if (this.props.onChange) {
        this.props.onChange(this.state.selected);
      }
      return;
    };

    if (this.state.selected === tag.value) {
      this.setState({
        selected: ''
      }, onChange);
    } else {
      this.setState({
        selected: tag.value
      }, onChange);
    }
  }

  render() {
    return (
      <div className="toggleable-tags">
        { this.props.tags.map(tag =>
          <Button
            key={ tag.title }
            onClick={ () => this.handleClick(tag) }
            neutral={ this.state.selected !== tag.value }
          >
            { tag.title }
          </Button>
        ) }
      </div>
    );
  }
}
