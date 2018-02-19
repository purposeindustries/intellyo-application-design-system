import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

class Tile extends React.Component {

  static propTypes = {
    image: PropTypes.string,
    icon: PropTypes.node,
    color: PropTypes.string,
    size: PropTypes.oneOf(['small', 'medium', 'large']),
    shape: PropTypes.oneOf(['circle', 'rounded', 'square']),
    style: PropTypes.object,
    className: PropTypes.string,
  }


  static defaultProps = {
    size: 'medium',
    shape: 'rounded',
    color: '#E6E6E6',
    icon: null,
  }

  render() {
    const style = {
      ...this.props.style,
      backgroundColor: this.props.color,
      backgroundImage: this.props.image ? `url(${this.props.image})` : 'no-image'
    };

    return (
      <div
        className={ cx('intellyo-tile', `tile-${this.props.size}`, `tile-${this.props.shape}`, this.props.className) }
        style={ style }
      >
        { this.props.icon }
      </div>
    );
  }
}

export default Tile;
