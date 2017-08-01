import React from 'react';
import PropTypes from 'prop-types';
import UserAvatar from 'react-user-avatar';
import classNames from 'classnames';

const Avatar = (props) => {
  return (
    <div
      className={ classNames('user-avatar', {
        'user-avatar--small': props.size === 'small',
        'user-avatar--medium': props.size === 'medium'
      }) }
    >
      <UserAvatar
        size={ (() => {
          switch (props.size) {
            case 'small': return 25;
            case 'medium': return 40;
            default: return 60;
          }
        })() }
        src={ props.src }
        name={ props.name }
      />
    </div>
  );
};

Avatar.displayName = 'Avatar';

Avatar.propTypes = {
  size: PropTypes.string,
  name: PropTypes.string,
  src: PropTypes.src
};

export default Avatar;
