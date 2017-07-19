import React from 'react';
import DisplayText from './display-text';
import Caption from './caption';
import PropTypes from 'prop-types';

const Card = (props) => (
  <div className="card">
    {
      props.title && (
        <div className="card-header">
          <DisplayText>
            { props.title }
          </DisplayText>
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
  footer: PropTypes.node
};

export default Card;
