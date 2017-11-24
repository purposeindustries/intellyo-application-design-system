import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

export default class Tooltip extends React.PureComponent {
  static displayName = 'Tooltip';

  static defaultProps = {
    placement: 'top',
  };

  static propTypes = {
    children: PropTypes.string.isRequired,
    placement: PropTypes.oneOf(['top', 'right', 'bottom', 'left']),
    className: PropTypes.string,
    autoPositionRef: PropTypes.func,
  };

  render() {
    return (
      <div
        ref={ this.props.autoPositionRef }
        className={
          classNames(this.props.className, 'tooltip', `tooltip-placement--${this.props.placement}`)
        }
      >
        { this.props.children }
        <div className="tooltip-arrow" />
      </div>
    );
  }
}
