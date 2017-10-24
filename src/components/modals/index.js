import React from 'react';
import { bool, string, node, func, number } from 'prop-types';
import Heading from '../heading/';
import Rodal from 'rodal';

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
  }

  static defaultProps = {
    isAnimated: true
  }

  handleAnimationEnd = () => {
    if (this.props.onAnimationEnd) {
      this.props.onAnimationEnd();
    }
    return;
  }

  render() {
    return (
      <div className="modal">
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
        >
          { (this.props.title || this.props.header) && (
            <header className="modal-header">
              { this.props.title && (
                <Heading>{ this.props.title }</Heading>
              ) }
              { this.props.header }
            </header>
          ) }
          <main className="modal-main-content">
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
