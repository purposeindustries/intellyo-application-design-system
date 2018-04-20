import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

const Tile = ({
  image,
  icon,
  color,
  size,
  shape,
  style,
  className,
}) => {
  const backgroundImage = image ? `url(${image})` : 'none';
  const styleWithBackground = {
    ...style,
    backgroundImage,
    backgroundColor: color,
  };

  return (
    <div
      className={ cx('intellyo-tile', `tile-${size}`, `tile-${shape}`, className) }
      style={ styleWithBackground }
    >
      { icon }
    </div>
  );
};

Tile.displayName = 'Tile';

Tile.propTypes = {
  image: PropTypes.string,
  icon: PropTypes.node,
  color: PropTypes.string,
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  shape: PropTypes.oneOf(['circle', 'rounded', 'square']),
  style: PropTypes.object,
  className: PropTypes.string,
};

Tile.defaultProps = {
  size: 'medium',
  shape: 'rounded',
  color: '#E6E6E6',
  icon: null,
};

export default Tile;
