import React from 'react';
import PropTypes from 'prop-types';

export default class AutoPositioner extends React.Component {
  static displayName = 'AutoPositioner';

  static propTypes = {
    children: PropTypes.node,
    behaviour: PropTypes.oneOf(['flip', 'push'])
  }

  static defaultProps = {
    behaviour: 'flip'
  }

  constructor(props) {
    super(props);
    this.state = {
      styles: {},
      placement: this.props.children.props.placement,
    };
  }

  state = {
    styles: {},
    placemenet: '',
  }

  componentDidMount() {
    this.getPlacement();
  }

  getPlacement = () => {
    if (this.overlay && this.positioner) {
      const defaultPlacement = this.props.children.props.placement;
      const { behaviour } = this.props;
      const getOverLayRects = () => {
        const { right, left } = this.overlay.getBoundingClientRect();
        return { left, right: window.innerWidth - right };
      };
      const arrowPosition = (this.positioner.getBoundingClientRect().left + (this.positioner.getBoundingClientRect().width / 2)) - getOverLayRects().left;

      const cases = {
        top: () => {
          if (behaviour === 'flip') {
            return;
          }
          // TODO finish
          return;
        },
        right: () => {
          if (behaviour === 'push') {
            return;
          }
          if (getOverLayRects().right <= 15) {
            this.setState({
              placement: 'left'
            });
          }
        },
        bottom: () => {
          if (behaviour === 'flip') {
            return;
          }
          const getCriticalSide = () => {
            const currentKey = Object.values(getOverLayRects()).findIndex(el => el <= 15);
            return Object.keys(getOverLayRects())[currentKey];
          };
          this.setState({
            styles: {
              popoverStyle: {
                left: getOverLayRects()[getCriticalSide()]
              },
              arrowStyles: {
                left: arrowPosition
              }
            }
          });
        },
        left: () => {
          if (behaviour === 'push') {
            return;
          }
          if (getOverLayRects().left <= 15) {
            this.setState({
              placement: 'right'
            });
          }
        },
      };

      switch (defaultPlacement) {
        case 'top':
          cases.top();
          break;
        case 'right':
          cases.right();
          break;
        case 'bottom':
          cases.bottom();
          break;
        case 'left':
          cases.left();
          break;
      }
    }
  }

  render() {
    return (
      <div
        className="auto-positioner overlay"
        ref={ el => {
          this.positioner = el;
        } }
      >
        { React.cloneElement(this.props.children, {
          autoPositionRef: el => {
            this.overlay = el;
          },
          placement: this.state.placement,
          autoStyles: this.state.styles
        }) }
      </div>
    );
  }
}
