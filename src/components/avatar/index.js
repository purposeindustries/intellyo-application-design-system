import React from 'react';
import PropTypes from 'prop-types';
import UserAvatar from 'react-user-avatar';
import classNames from 'classnames';
import silhouette from './silhouette';
import Tooltip from '../tooltip';
import OverlayTrigger from '../overlay-trigger';

const Avatar = (props) => {

  const sizes = {
    small: 25,
    medium: 40,
    extraLarge: 120,
  };
  const defaultSize = 60;

  return (
    <div
      className={ classNames('user-avatar', {
        'user-avatar--small': props.size === 'small',
        'user-avatar--medium': props.size === 'medium',
        'user-avatar--extra-large': props.size === 'extraLarge',
        'user-avatar--horizontal': props.title
      }) }
      style={ props.style }
    >
      { !props.title && props.showTooltip ? (
        <OverlayTrigger
          trigger="hover"
          delay={ 0 }
          overlay={
            <Tooltip placement={ props.tooltipPlacement }>{ props.name === '' ? 'N/A' : props.name }</Tooltip>
          }
        >
          <UserAvatar
            size={ sizes[props.size] || defaultSize }
            src={ props.src || silhouette }
            name={ props.name === '' ? 'N/A' : props.name }
          />
        </OverlayTrigger>
      ) : (
        <UserAvatar
          size={ sizes[props.size] || defaultSize }
          src={ props.src || silhouette }
          name={ props.name === '' ? 'N/A' : props.name }
        />
      ) }
      { props.title && (
        <div className="avatar-caption-wrapper">
          <span className="avatar-name">{ props.title }</span>
          { props.caption && <div className="caption-wrap">
            { props.icon }
            <span className="avatar-caption">{ props.caption }</span>
          </div> }
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
  caption: PropTypes.node,
  icon: PropTypes.node,
  src: PropTypes.string,
  tooltipPlacement: PropTypes.string,
  showTooltip: PropTypes.bool,
  title: PropTypes.node,
};

Avatar.defaultProps = {
  src: silhouette,
  showTooltip: true,
  name: 'N/A',
};

export default Avatar;
