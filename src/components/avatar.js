import React from 'react';
import PropTypes from 'prop-types';
import UserAvatar from 'react-user-avatar';
import classNames from 'classnames';
import Icon from './icon';

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
        'user-avatar--horizontal': props.location || props.jobPosition
      }) }
      style={ props.style }
    >
      <UserAvatar
        size={ sizes[props.size] || defaultSize }
        src={ props.src }
        name={ props.name }
      />
      { props.jobPosition && (
        <div className="avatar-job-position-wrapper">
          <span className="avatar-name">{ props.name }</span>
          <span className="avatar-job-position">{ props.jobPosition }</span>
        </div>
      ) }
      { props.location && (
        <div className="avatar-location-wrapper">
          <span className="avatar-name">{ props.name }</span>
          <div className="location-wrap">
            <Icon icon="ion-ios-location" />
            <span className="avatar-location">{ props.location }</span>
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
  jobPosition: PropTypes.string,
  location: PropTypes.string,
  src: PropTypes.string
};

export default Avatar;
