import React from 'react';
import { bool, string, node, func, number, object } from 'prop-types';
import Heading from '../heading/';
import Rodal from 'rodal';
import classnames from 'classnames';

export default class Modal extends React.PureComponent {

  static displayName = 'Modal';

  static propTypes = {
    visible: bool.isRequired,
    onClose: func,
    title: string,
    header: node,
    children: node,
    footer: node,
    measure: string.isRequired,
    width: number.isRequired,
    height: number.isRequired,
    className: string,
    isAnimated: bool,
    duration: number,
    showCloseButton: bool,
    animation: string,
    onAnimationEnd: func,
    hasAutoHeight: bool,
    customStyles: object,
    customMaskStyles: object,
  }

  static defaultProps = {
    isAnimated: true,
    customStyles: {},
  }

  handleAnimationEnd = () => {
    if (this.props.onAnimationEnd) {
      this.props.onAnimationEnd();
    }
    return;
  }

  componentDidUpdate() {
    if (document && this.props.visible) {
      document.body.classList.add('modal--open');
    } else {
      document.body.classList.remove('modal--open');
    }
  }

  render() {
    return (
      <div
        className={ classnames('modal', {
          'modal--auto-height': this.props.hasAutoHeight,
          'modal--has-header': this.props.title || this.props.header,
          'modal--has-footer': this.props.footer,
        }) }
      >
        <Rodal
          visible={ this.props.visible }
          onClose={ this.props.onClose }
          measure={ this.props.measure }
          width={ this.props.width }
          height={ this.props.height }
          className={ this.props.className }
          duration={ this.props.isAnimated ? this.props.duration : 0 }
          showCloseButton={ this.props.showCloseButton }
          closeOnEsc
          animation={ this.props.animation }
          onAnimationEnd={ this.handleAnimationEnd }
          customStyles={ this.props.customStyles }
          customMaskStyles={ this.props.customMaskStyles }
        >
          { (this.props.title || this.props.header) && (
            <header className="modal-header">
              { this.props.title && (
                <Heading>{ this.props.title }</Heading>
              ) }
              { this.props.header }
            </header>
          ) }
          <main className="modal-body">
            { this.props.children }
          </main>
          { this.props.footer && (
            <footer className="modal-footer">
              { this.props.footer }
            </footer>
          ) }
        </Rodal>
      </div>
    );
  }
}
