import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

const Row = (props) => {
  const cols = React.Children.map(props.children, (col) => {
    if (props.gutter) {
      return React.cloneElement(col, {
        style: {
          paddingLeft: props.gutter / 2,
          paddingRight: props.gutter / 2,
          ...col.props.style
        }
      });
    }
    return col;
  });
  let style;
  if (props.gutter) {
    style = {
      marginLeft: props.gutter / 2 * -1,
      marginRight: props.gutter / 2 * -1,
      ...props.style
    };
  }
  return (
    <div className={ cx('row', props.className) } style={ style }>
      { cols }
    </div>
  );
};

Row.propTypes = {
  gutter: PropTypes.number,
  style: PropTypes.object,
  className: PropTypes.string,
};

Row.defaultProps = {
  gutter: 15,
  style: {}
};

Row.displayName = 'GridRow';

Row.propTypes = {
  children: PropTypes.node
};

export default Row;
