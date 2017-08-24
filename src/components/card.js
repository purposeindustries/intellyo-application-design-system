import React from 'react';
import DisplayText from './display-text';
import Caption from './caption';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const Card = (props) => (
  <div className={ classNames('card', props.className) }>
    {
      props.title && (
        <div className="card-header">
          <div className="card-header-wrap">
            <DisplayText>
              { props.title }
            </DisplayText>
            { props.icon }
          </div>
          {
            props.titleCaption && (
              <Caption>{ props.titleCaption }</Caption>
            )
          }
        </div>
      )
    }
    <div className="card-body">
      { props.children }
    </div>
    {
      props.footer && (
        <div className="card-footer">
          { props.footer }
        </div>
      )
    }
  </div>
);

Card.displayName = 'Card';

Card.propTypes = {
  title: PropTypes.string,
  titleCaption: PropTypes.string,
  children: PropTypes.node,
  footer: PropTypes.node,
  icon: PropTypes.node,
  className: PropTypes.string
};

export default Card;
