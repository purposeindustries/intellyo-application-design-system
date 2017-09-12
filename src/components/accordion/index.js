import React from 'react';
import PropTypes from 'prop-types';
import Icon from '../icon/';
import cx from 'classnames';

export const AccordionItem = (props) => (
  <div
    className={ cx('accordion-item', {
      'accordion-item--open': props.isOpen
    }) }
  >
    <div
      className="accordion-item-triggers"
      onClick={ () => props.onClick(props.id) }
    >
      { props.icon }
      <span className="accordion-item-triggers-title">{ props.title }</span>
      { props.isOpen ? (
        <Icon icon="ion-android-close" />
      ) : (
        <Icon icon="ion-arrow-down-b" />) }
    </div>
    { props.isOpen && (
      <div className="accordion-item-children">
        { props.children }
      </div>
    ) }
  </div>
);

AccordionItem.displayName = 'AccordionItem';

AccordionItem.propTypes = {
  icon: PropTypes.element,
  title: PropTypes.string,
  children: PropTypes.node,
  isOpen: PropTypes.bool,
  onClick: PropTypes.func,
  id: PropTypes.string
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

export class AccordionSingle extends React.Component {
  displayName = 'AccordionSingle';
  static propTypes = {
    children: PropTypes.node,
  }

  state = {
    items: {}
  };

  toggle = (id) => {
    this.setState((state) => {
      const isOpened = Boolean(state.items[id]);
      let items = state.items;
      if (!isOpened) {
        items = {
          [id]: true
        };
      }
      return {
        items
      };
    });
  }

  render() {
    return (
      <div className="accordion">
        {
          React.Children.map(this.props.children, ((child, i) => {
            return React.cloneElement(child, {
              ...child.props,
              onClick: () => this.toggle(`item-${i}`),
              isOpen: this.state.items[`item-${i}`]
            });
          }))
        }
      </div>
    );
  }
}

export class AccordionMulti extends React.Component {
  displayName = 'AccordionMulti';
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
              ...child.props,
              onClick: () => this.toggle(`item-${i}`),
              isOpen: this.state.items[`item-${i}`]
            });
          }))
        }
      </div>
    );
  }
}
