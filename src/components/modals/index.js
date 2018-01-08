import React from 'react';
import { bool, string, node, func, number, object } from 'prop-types';
import Heading from '../heading/';
import Rodal from 'rodal';
import ReactDOM from 'react-dom';

let floatingContainer;

if (typeof document !== 'undefined') {
  floatingContainer = document.getElementById('floating-container');
}

export default class Modal extends React.PureComponent {
  constructor(props) {
    super(props);
    this.el = document.createElement('div');
  }

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

  componentDidMount() {
    floatingContainer.appendChild(this.el);
  }

  componentWillUnmount() {
    floatingContainer.removeChild(this.el);
  }

  handleAnimationEnd = () => {
    if (this.props.onAnimationEnd) {
      this.props.onAnimationEnd();
    }
    return;
  }

  render() {
    const autoHeightStyles = {
      'height': 'auto',
      'bottom': 'auto',
      'top': '50%',
      'transform': 'translateY(-50%)',
    };
    return ReactDOM.createPortal((
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
          customStyles={ this.props.hasAutoHeight
            ? Object.assign(this.props.customStyles, autoHeightStyles)
            : this.props.customStyles }
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
      </div>),
      this.el
      // floatingContainer
    );
  }
}
