import React from 'react';
import PropTypes from 'prop-types';
import root from 'window-or-global';
import Icon from '../icon/';
import cx from 'classnames';
import { Motion, spring, presets } from 'react-motion';
import throttle from 'lodash.throttle';

export class AccordionItem extends React.PureComponent {
  static displayName = 'AccordionItem';

  static propTypes = {
    icon: PropTypes.element,
    title: PropTypes.node,
    children: PropTypes.node,
    isOpen: PropTypes.bool,
    onClick: PropTypes.func,
    className: PropTypes.string
  }

  constructor() {
    super();
    this.throttleSetElementHeight = throttle(this.setElementHeight);
  }

  state = {
    isResting: false,
    elementHeight: 0
  }

  componentDidMount() {
    root.addEventListener('resize', this.throttleSetElementHeight);
  }

  componentWillUnmount() {
    root.removeEventListener('resize', this.throttleSetElementHeight);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.isOpen === this.props.isOpen) {
      return;
    }
    this.setElementHeight();
    this.setState({
      isResting: false
    });
  }

  setElementHeight = () => {
    if (!this._childrenWrapper) {
      return;
    }
    const { clientHeight } = this._childrenWrapper;
    if (this.state.elementHeight !== clientHeight) {
      this.setState({
        elementHeight: clientHeight
      });
    }
  }

  render() {
    const targetHeight = this.props.isOpen ? this.state.elementHeight : 0;
    const targetOpacity = this.props.isOpen ? 1 : 0;
    return (
      <div
        className={ cx('accordion-item', this.props.className, {
          'accordion-item--open': this.props.isOpen
        }) }
      >
        <div
          className="accordion-item-header"
          onClick={ this.props.onClick }
        >
          { this.props.icon }
          <span className="accordion-item-title">{ this.props.title }</span>
          <Icon icon="ion-arrow-down-b" />
        </div>
        <Motion
          onRest={ () => {
            this.setState({
              isResting: true
            });
          } }
          defaultStyles={ {
            height: 0,
            opacity: 0
          } }
          style={ {
            height: spring(targetHeight, presets.stiff),
            opacity: spring(targetOpacity, presets.stiff)
          } }
        >
          { interpolatingStyles => {
            let children;
            if (this.props.isOpen) {
              children = (
                <div
                  className="accordion-item-children-inner-wrapper"
                  ref={ (el) => {
                    this._childrenWrapper = el;
                    requestAnimationFrame(() => {
                      this.setElementHeight();
                    });
                  } }
                >
                  { this.props.children }
                </div>
              );
            }
            return (
              <div
                className="accordion-item-children"
                style={ this.state.isResting && this.props.isOpen ? null : interpolatingStyles }
              >
                { children }
              </div>
            );
          } }
        </Motion>
      </div>
    );
  }
}

AccordionItem.defaultProps = {
  onClick: () => {},
  className: ''
};

export const Accordion = (props) => (
  <div className="accordion">
    { props.children }
  </div>
);

Accordion.displayName = 'Accordion';

Accordion.propTypes = {
  children: PropTypes.node
};

export class MultiAccordion extends React.Component {
  displayName = 'MultiAccordion';
  static propTypes = {
    children: PropTypes.node,
  }

  state = {
    items: {}
  };

  toggle = (id) => {
    this.setState((state) => ({
      items: {
        ...state.items,
        [id]: !state.items[id]
      }
    }));
  }

  render() {
    return (
      <div className="accordion">
        {
          React.Children.map(this.props.children, ((child, i) => {
            return React.cloneElement(child, {
              onClick: () => this.toggle(`item-${i}`),
              isOpen: this.state.items[`item-${i}`]
            });
          }))
        }
      </div>
    );
  }
}

export class SingleAccordion extends MultiAccordion {
  displayName = 'SingleAccordion';

  // Toggles every item to undefined,
  // but the current one with id
  toggle = (id) => {
    this.setState((state) => {
      const isOpened = Boolean(state.items[id]);
      const items = {
        [id]: !isOpened
      };
      return { items };
    });
  }
}
