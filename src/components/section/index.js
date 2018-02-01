import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import {
  Heading,
  Caption
} from '../index';

export default class Section extends React.PureComponent {
  static displayName = 'Card';

  static propTypes = {
    title: PropTypes.node,
    titleCaption: PropTypes.node,
    children: PropTypes.node,
    footer: PropTypes.node,
    icon: PropTypes.node,
    className: PropTypes.string
  }

  render() {
    return (
      <div className={ cx('section', this.props.className) }>
        <div className="section-header">
          <div className="section-header-wrap">
            <Heading>{ this.props.title }</Heading>
            { this.props.icon }
          </div>
          { this.props.titleCaption && <Caption>{ this.props.titleCaption }</Caption> }
        </div>
        <div className="section-body">
          { this.props.children }
        </div>
        { this.props.footer && <div className="section-footer">
          { this.props.footer }
        </div> }
      </div>
    );
  }
}
