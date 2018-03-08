import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import silhouette from './silhouette';
import Tooltip from '../tooltip';
import OverlayTrigger from '../overlay-trigger';

const Avatar = (props) => (
  <div
    className={ classNames('user-avatar', {
      'user-avatar--small': props.size === 'small',
      'user-avatar--medium': props.size === 'medium',
      'user-avatar--extra-large': props.size === 'extraLarge',
    }) }
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
        <div className="user-avatar-img">
          <img
            src={ props.src }
            alt={ `picture of ${props.name}` }
          />
        </div>
      </OverlayTrigger>
    ) : (
      <div className="user-avatar-img">
        <img
          src={ props.src || silhouette }
          alt={ `picture of ${props.name}` }
        />
      </div>
    ) }
  </div>
);

Avatar.displayName = 'Avatar';

Avatar.propTypes = {
  size: PropTypes.string,
  name: PropTypes.string,
  src: PropTypes.string,
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
