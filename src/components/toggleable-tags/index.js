import React from 'react';
import PropTypes from 'prop-types';
import Button from '../button';

const ToggleableTags = ({ tags, selected, onChange }) => {
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

ToggleableTags.displayName = 'ToggleableTags';

ToggleableTags.propTypes = {
  tags: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired
  })),
  onChange: PropTypes.func.isRequired,
  selected: PropTypes.string.isRequired
};

export default ToggleableTags;
