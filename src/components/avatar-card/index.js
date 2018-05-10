import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import Avatar from '../avatar';

const AvatarCard = (props) => {
  const avatarProps = {
    name: props.name,
    src: props.src,
    showTooltip: false
  };
  return (
    <div
      className={ classNames('user-avatar-card', {
        'user-avatar-card--small': props.size === 'small',
        'user-avatar-card--medium': props.size === 'medium',
        'user-avatar-card--extra-large': props.size === 'extraLarge',
      },
      props.className) }
    >
      { props.renderAvatar(avatarProps) || (
        <Avatar
          { ...avatarProps }
          size={ props.size }
        />
      ) }
      <div className="user-avatar-card-caption-wrapper">
        <span
          className={ classNames('user-avatar-card-name', {
            'user-avatar-card-name--small': props.size === 'small',
            'user-avatar-card-name--medium': props.size === 'medium',
            'user-avatar-card-name--extra-large': props.size === 'extraLarge',
          }) }
        >
          { props.name }
        </span>
        { props.caption && (
          <div className="card-caption-wrap">
            { props.icon }
            <span
              className={ classNames('user-avatar-card-caption', {
                'user-avatar-card-caption--small': props.size === 'small',
                'user-avatar-card-caption--medium': props.size === 'medium',
                'user-avatar-card-caption--extra-large': props.size === 'extraLarge',
              }) }
            >
              { props.caption }
            </span>
          </div>
        ) }
      </div>
    </div>
  );
};

AvatarCard.displayName = 'AvatarCard';
AvatarCard.propTypes = {
  name: PropTypes.string,
  src: PropTypes.string,
  caption: PropTypes.node,
  icon: PropTypes.node,
  className: PropTypes.string,
  renderAvatar: PropTypes.func,
  size: PropTypes.oneOf(['small', 'medium', 'large', 'extra-large'])
};

AvatarCard.defaultProps = {
  renderAvatar: () => {},
};

export default AvatarCard;
