import React from 'react';
import update from 'immutability-helper';
import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';
import List from '../components/list/';
import Card from '../components/list/Card';

class ListsPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cards: [
        {
          id: 1,
          text: 'Write a cool JS library',
        },
        {
          id: 2,
          text: 'Make it generic enough',
        },
        {
          id: 3,
          text: 'Write README',
        },
        {
          id: 4,
          text: 'Create some examples',
        },
        {
          id: 5,
          text:
            'Spam in Twitter and IRC to promote it (note that this element is taller than the others)',
        },
        {
          id: 6,
          text: '???',
        },
        {
          id: 7,
          text: 'PROFIT',
        },
      ],
    };
  }

  addNewListItem = () => {
    this.setState(prevState => ({
      cards: [...prevState.cards, { id: +new Date(), text: 'bar' }]
    }));
  }

  removeListItem = (state, id) => {
    const cards = state.cards.filter(card => card.id !== id);
    this.setState({ cards });
  }

  moveCard = (dragIndex, hoverIndex) => {
    const { cards } = this.state;
    const dragCard = cards[dragIndex];

    this.setState(
      update(this.state, {
        cards: {
          $splice: [[dragIndex, 1], [hoverIndex, 0, dragCard]],
        },
      }),
    );
  }

  render() {
    const { cards } = this.state;
    return (
      <div>
        <List
          items={ cards }
          moveCard={ this.moveCard }
          onAddClick={ this.addNewListItem }
          renderItem={ (card, i) => (
            <Card
              key={ card.id }
              index={ i }
              id={ card.id }
              text={ card.text }
              moveCard={ this.moveCard }
              onRemove={ () => this.removeListItem(this.state, card.id) }
            />
          ) }
        />
      </div>
    );
  }
}

ListsPage.displayName = 'ListPage';

export default DragDropContext(HTML5Backend)(ListsPage);
