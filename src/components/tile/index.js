import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

class Tile extends React.Component {

  static propTypes = {
    image: PropTypes.string,
    icon: PropTypes.string,
    size: PropTypes.oneOf(['small', 'medium', 'large']),
    shape: PropTypes.oneOf(['circle', 'rounded', 'square']),
  }

  render() {
    return (
      <div
        className={ cx('intellyo-tile', `tile-${this.props.size}`, `tile-${this.props.shape}`) }
      >
        Hello
      </div>
    );
  }
}

export default Tile;
