import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import silhouette from './silhouette';
import Tooltip from '../tooltip';
import OverlayTrigger from '../overlay-trigger';

const AvatarImg = (props) => (
  <div className="user-avatar-img">
    <img
      src={ props.src || silhouette }
      alt={ `picture of ${props.name || 'N/A'}` }
    />
  </div>
);

AvatarImg.displayName = 'AvatarImg';
AvatarImg.propTypes = {
  src: PropTypes.string,
  name: PropTypes.string,
};

const Avatar = (props) => (
  <div
    className={ classNames('user-avatar', {
      'user-avatar--small': props.size === 'small',
      'user-avatar--medium': props.size === 'medium',
      'user-avatar--extra-large': props.size === 'extraLarge',
    }, props.className) }
    style={ props.style }
  >
    { props.showTooltip ? (
      <OverlayTrigger
        trigger="hover"
        delay={ 0 }
        overlay={
          <Tooltip placement={ props.tooltipPlacement }>{ props.name === '' ? 'N/A' : props.name }</Tooltip>
        }
      >
        <AvatarImg
          src={ props.src }
          name={ props.name }
        />
      </OverlayTrigger>
    ) : (
      <AvatarImg
        src={ props.src }
        name={ props.name }
      />
    ) }
  </div>
);

Avatar.displayName = 'Avatar';

Avatar.propTypes = {
  size: PropTypes.string,
  name: PropTypes.string,
  src: PropTypes.string,
  className: PropTypes.string,
  tooltipPlacement: PropTypes.string,
  showTooltip: PropTypes.bool,
  style: PropTypes.object,
};

Avatar.defaultProps = {
  src: silhouette,
  showTooltip: true,
  name: 'N/A',
};

export default Avatar;
