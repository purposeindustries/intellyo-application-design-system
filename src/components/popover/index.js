import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Arrow from './arrow';

export default class Popover extends React.PureComponent {
  static displayName = 'Popover';

  static propTypes = {
    children: PropTypes.node,
    placement: PropTypes.oneOf(['top', 'right', 'bottom', 'left']),
    className: PropTypes.string,
    autoPositionRef: PropTypes.func,
    autoStyles: PropTypes.object,
  }

  static defaultProps = {
    placement: 'top',
    autoStyles: {}
  }

  render() {
    return (
      <div
        ref={ this.props.autoPositionRef }
        className={ classNames(this.props.className, 'popover', `popover--${this.props.placement}`) }
        style={ this.props.autoStyles.popoverStyle }
      >
        <Arrow arrowStyles={ this.props.autoStyles.arrowStyles } />
        { this.props.children }
      </div>
    );
  }
}
