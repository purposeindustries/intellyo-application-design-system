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
    activeGA: ''
  }

  handleClick = (tag) => {
    this.setState({
      activeGA: tag.value
    });
    if (this.props.onChange) {
      this.props.onChange(tag.value);
    }
  }

  render() {
    return (
      <div className="toggleable-tags">
        { this.props.tags.map(tag =>
          <Button
            key={ tag.title }
            onClick={ () => this.handleClick(tag) }
            neutral={ this.state.activeGA !== tag.value }
          >
            { tag.title }
          </Button>
        ) }
      </div>
    );
  }
}
