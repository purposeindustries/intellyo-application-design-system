import React from 'react';
import PropTypes from 'prop-types';
import Button from '../button';

const ToggleableTagsPropTypes = {
  tags: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired
  })),
  onChange: PropTypes.func
};

export default class ToggleableTags extends React.PureComponent {
  static displayName = 'ToggleableTags';

  static propTypes = ToggleableTagsPropTypes;

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
            size="small"
          >
            { tag.title }
          </Button>
        ) }
      </div>
    );
  }
}

export const ControlledToggleableTags = ({ tags, selected, onChange }) => {
  return (
    <div className="toggleable-tags">
      { tags.map(tag =>
        <Button
          key={ tag.title }
          onClick={ () => onChange(tag.value) }
          neutral={ tag.value !== selected }
          size="small"
        >
          { tag.title }
        </Button>
      ) }
    </div>
  );
};

ControlledToggleableTags.displayName = 'ControlledToggleableTags';

const ControlledToggleableTagsPropTypes = Object.assign({}, ToggleableTagsPropTypes);
ControlledToggleableTagsPropTypes.selected = PropTypes.string.isRequired;
ControlledToggleableTagsPropTypes.onChange = PropTypes.func.isRequired;

ControlledToggleableTags.propTypes = ControlledToggleableTagsPropTypes;
