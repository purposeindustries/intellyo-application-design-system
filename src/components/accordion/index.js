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
      onClick={ props.onClick }
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
  onClick: PropTypes.func
};

export default class Accordion extends React.Component {
  displayName = 'Accordion';
  static propTypes = {
    children: PropTypes.node,
    openMultiple: PropTypes.bool
  }

  static defaultProps = {
    openMultiple: true
  }

  state = {}

  componentDidMount() {
    React.Children.map(this.props.children, (c, i) => {
      this.setState({
        [`child-${i}-isOpen`]: false
      });
    });
  }

  renderChildren() {
    return React.Children.map(this.props.children, (c, i) => {
      return React.cloneElement(c, {
        isOpen: this.state[`child-${i}-isOpen`],
        onClick: () => {
          if (!this.props.openMultiple) {
            this.setState((prevState) => {
              for (const prevStateProp in prevState) {
                if (prevState.hasOwnProperty(prevStateProp)) {
                  if (prevStateProp.includes(`${i}`)) {
                    prevState[prevStateProp] = true;
                  } else {
                    prevState[prevStateProp] = false;
                  }
                }
              }
            });
          }
          this.setState({
            [`child-${i}-isOpen`]: !this.state[`child-${i}-isOpen`]
          });
        }
      });
    });
  }

  render() {
    return (
      <div className="accordion">
        { this.renderChildren() }
      </div>
    );
  }
}
