import React from 'react';
import PropTypes from 'prop-types';
import root from 'window-or-global';
import Icon from '../icon/';
import cx from 'classnames';
import { Motion, spring, presets } from 'react-motion';
import throttle from 'lodash.throttle';

export class AccordionItem extends React.Component {
  static displayName = 'AccordionItem';

  static propTypes = {
    icon: PropTypes.element,
    title: PropTypes.string,
    children: PropTypes.node,
    isOpen: PropTypes.bool,
    onClick: PropTypes.func,
  }

  constructor() {
    super();
    this.throttleSetElementHeight = throttle(this.setElementHeight);
  }

  state = {}

  componentDidMount() {
    root.addEventListener('resize', this.throttleSetElementHeight);
  }

  componentWillUnmount() {
    root.removeEventListener('resize', this.throttleSetElementHeight);
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
    const targetOpacity = this.props.isOpen ? 1 : 0;
    return (
      <div
        className={ cx('accordion-item', {
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
          defaultStyles={ {
            height: 0,
            opacity: 0
          } }
          style={ {
            height: this.props.isOpen ? spring(this.state.elementHeight, presets.stiff) : spring(0, presets.stiff),
            opacity: spring(targetOpacity, presets.stiff)
          } }
        >
          { interpolatingStyles =>
            <div className="accordion-item-children" style={ interpolatingStyles }>
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
            </div> }
        </Motion>
      </div>
    );
  }
}

AccordionItem.defaultProps = {
  onClick: () => {}
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
