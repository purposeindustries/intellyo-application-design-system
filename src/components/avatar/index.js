import React from 'react';
import PropTypes from 'prop-types';
import UserAvatar from 'react-user-avatar';
import classNames from 'classnames';

const Avatar = (props) => {

  const sizes = {
    small: 25,
    medium: 40
  };
  const defaultSize = 60;

  return (
    <div
      className={ classNames('user-avatar', {
        'user-avatar--small': props.size === 'small',
        'user-avatar--medium': props.size === 'medium',
        'user-avatar--horizontal': props.caption
      }) }
      style={ props.style }
    >
      <UserAvatar
        size={ sizes[props.size] || defaultSize }
        src={ props.src }
        name={ props.name }
      />
      { props.caption && (
        <div className="avatar-caption-wrapper">
          <span className="avatar-name">{ props.name }</span>
          <div className="caption-wrap">
            { props.icon }
            <span className="avatar-caption">{ props.caption }</span>
          </div>
        </div>
      ) }
    </div>
  );
};

Avatar.displayName = 'Avatar';

Avatar.propTypes = {
  size: PropTypes.string,
  style: PropTypes.object,
  name: PropTypes.string,
  caption: PropTypes.string,
  icon: PropTypes.node,
  src: PropTypes.string
};

export default Avatar;
