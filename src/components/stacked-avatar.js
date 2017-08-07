import React from 'react';
import PropTypes from 'prop-types';
import Avatar from './avatar';

const StackedAvatar = (props) => (
  <div className="stacked-avatar">
    { props.avatars.slice(0, 3).map((avatar, i) => (
      <Avatar
        key={ i }
        name={ avatar.name }
        src={ avatar.src }
        size="small"
        style={ {left: `${i * 15}px`} }
      />
    )) }
    { props.avatars.length > 3 &&
      <div className="stacked-avatar--additional">
        +{ props.avatars.length - 3 }
      </div>
    }
  </div>
);

StackedAvatar.displayName = 'StackedAvatar';

StackedAvatar.propTypes = {
  avatars: PropTypes.array
};

export default StackedAvatar;
