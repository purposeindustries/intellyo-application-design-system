import React from 'react';
import PropTypes from 'prop-types';
import Icon from '../icon/';
import cx from 'classnames';
import { Motion, spring, presets } from 'react-motion';

export const AccordionItem = (props) => (
  <div
    className={ cx('accordion-item', {
      'accordion-item--open': props.isOpen
    }) }
  >
    <div
      className="accordion-item-header"
      onClick={ props.onClick }
    >
      { props.icon }
      <span className="accordion-item-title">{ props.title }</span>
      { props.isOpen ? (
        <Icon icon="ion-android-close" />
      ) : (
        <Icon icon="ion-arrow-down-b" />) }
    </div>
    <Motion
      defaultStyles={ {
        height: 0,
        opacity: 0,
        pointerEvents: 'none'
      } }
      style={ {
        height: props.isOpen ? spring(55, presets.stiff) : spring(0, presets.stiff),
        opacity: props.isOpen ? spring(1, presets.stiff) : spring(0, presets.stiff),
        pointerEvents: 'auto'
      } }
    >
      { interpolatingStyles =>
        <div className="accordion-item-children" style={ interpolatingStyles }>
          <div className="accordion-item-children-inner-wrapper">
            { props.children }
          </div>
        </div> }
    </Motion>
  </div>
);

AccordionItem.displayName = 'AccordionItem';

AccordionItem.propTypes = {
  icon: PropTypes.element,
  title: PropTypes.string,
  children: PropTypes.node,
  isOpen: PropTypes.bool,
  onClick: PropTypes.func,
};

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
