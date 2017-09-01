import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import root from 'window-or-global';

class HorizontallyScrollableRow extends React.Component {
  static displayName = 'HorizontallyScrollableRow';
  static propTypes = {
    children: PropTypes.oneOfType([PropTypes.element, PropTypes.arrayOf(PropTypes.element)])
  };
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {
    if (this.props.children) {
      const { clientHeight } = ReactDOM.findDOMNode(this.firstElement);
      root.setTimeout(() => this.setState({
        elementHeight: clientHeight
      }));
    }
  }
  render() {
    let children, firstChild, restChildren;
    if (this.props.children) {
      children = React.Children.toArray(this.props.children);
      firstChild = React.cloneElement(children[0], {
        ref: (el) => {
          this.firstElement = el;
        }
      });
      restChildren = children.slice(1);
    }
    return (
      <div
        className="horizontally-scrollable-row"
        style={ { 'height': `${this.state.elementHeight}px` } }
      >
        <div className="horizontally-scrollable-row-inner">
          { firstChild }
          { restChildren }
        </div>
      </div>
    );
  }
}

export default HorizontallyScrollableRow;
