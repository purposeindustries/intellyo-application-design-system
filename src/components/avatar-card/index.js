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
    <div className={ classNames('user-avatar-card', props.className) }>
      { props.renderAvatar(avatarProps) || (
        <Avatar
          { ...avatarProps }
        />
      ) }
      <div className="user-avatar-card-caption-wrapper">
        <span className="user-avatar-card-name">{ props.name }</span>
        { props.caption && (
          <div className="card-caption-wrap">
            { props.icon }
            <span className="user-avatar-card-caption">{ props.caption }</span>
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
};

AvatarCard.defaultProps = {
  renderAvatar: () => {},
};

export default AvatarCard;
