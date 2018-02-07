import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { findDOMNode } from 'react-dom';
import {
  DragSource as dragSource,
  DropTarget as dropTarget
} from 'react-dnd';

const itemSource = {
  beginDrag(props) {
    return {
      id: props.id,
      index: props.index,
    };
  },
};

const itemTarget = {
  hover(props, monitor, component) {
    const dragIndex = monitor.getItem().index;
    const hoverIndex = props.index;

    if (dragIndex === hoverIndex) {
      return;
    }

    const hoverBoundingRect = findDOMNode(component).getBoundingClientRect();

    const hoverMiddleY = (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;

    const clientOffset = monitor.getClientOffset();

    const hoverClientY = clientOffset.y - hoverBoundingRect.top;

    if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
      return;
    }

    if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
      return;
    }

    props.moveListItem(dragIndex, hoverIndex);

    monitor.getItem().index = hoverIndex;
  },
};

const collectDrop = (connect) => ({
  connectDropTarget: connect.dropTarget(),
});

const collectDrag = (connect, monitor) => ({
  connectDragSource: connect.dragSource(),
  isDragging: monitor.isDragging(),
  connectDragPreview: connect.dragPreview(),
});

class DragSort extends Component {
  displayName = 'DragSort';

  static propTypes = {
    connectDragSource: PropTypes.func.isRequired,
    connectDragPreview: PropTypes.func.isRequired,
    connectDropTarget: PropTypes.func.isRequired,
    isDragging: PropTypes.bool,

    index: PropTypes.number.isRequired,
    id: PropTypes.any.isRequired,
    moveListItem: PropTypes.func.isRequired,
    children: PropTypes.node,
    isDragEnabled: PropTypes.bool,
  };

  render() {
    if (!this.props.isDragEnabled) {
      return <React.Fragment>{this.props.children}</React.Fragment>;
    }

    const {
      isDragging,
      connectDragSource,
      connectDropTarget,
      connectDragPreview,
    } = this.props;
    const opacity = isDragging ? 0 : 1;

    return connectDragPreview(
      connectDropTarget(
        <div
          className="intellyo-drag-sort"
          style={ { opacity } }
        >
          {connectDragSource(<div className="drag-and-drop-handle" />)}
          { this.props.children }
        </div>)
      );
  }
}

export default dropTarget('card', itemTarget, collectDrop)(
  dragSource('card', itemSource, collectDrag)(DragSort)
);
