import React from 'react';
import DisplayText from './display-text';
import Caption from './caption';

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

export default Card;
