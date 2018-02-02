import React from 'react';
import Card from './Card';


const style = {
  width: 400,
};


class ListOfCards extends React.Component {
  render() {
    return (
      <div>
        <div style={ style }>
          {this.props.cards.map((card, i) => (
            <Card
              key={ card.id }
              index={ i }
              id={ card.id }
              text={ card.text }
              moveCard={ this.props.moveCard }
              onRemove={ this.props.removeCard }
            />
          ))}
        </div>
        <button onClick={ this.props.onAddClick }>Add Card</button>
      </div>
    );
  }
}

export default ListOfCards;
