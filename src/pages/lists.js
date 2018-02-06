import React from 'react';
import update from 'immutability-helper';
import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';
import List from '../components/list/';
import DragSort from '../components/list/dragSort';
import Item from '../components/list/item';
import Button from '../../dist/button/';

class ListsPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cards: [
        {
          id: 1,
          text: 'Write a cool JS library',
          isEditing: false,
        },
        {
          id: 2,
          text: 'Make it generic enough',
          isEditing: false,
        },
        {
          id: 3,
          text: 'Write README',
          isEditing: false,
        },
        {
          id: 4,
          text: 'Create some examples',
          isEditing: false,
        },
        {
          id: 5,
          text: 'Spam in Twitter and IRC to promote it (note that this element is taller than the others)',
          isEditing: false,
        },
        {
          id: 6,
          text: '???',
          isEditing: false,
        },
        {
          id: 7,
          text: 'PROFIT',
          isEditing: false,
        },
      ],
      isEditing: false,
    };
  }

  addNewListItem = () => {
    const id = +new Date();
    this.setState(prevState => ({
      cards: [...prevState.cards, { id, text: '' }]
    }), () => this.editItem(this.state.cards.length - 1));
  }

  editItem = (index) => {
    this.setState({
      cards: update(this.state.cards, {[index]: {
        isEditing: {$set: true}
      }})
    });
  }

  updateItem = (index, newValue) => {
    this.setState({
      cards: update(this.state.cards, {[index]: {
        text: {$set: newValue},
        isEditing: {$set: false}
      }})
    });
  }

  removeListItem = (id) => {
    const cards = this.state.cards.filter(card => card.id !== id);
    this.setState({ cards });
  }

  moveListItem = (dragIndex, hoverIndex) => {
    const { cards } = this.state;

    this.setState(
      update(this.state, {
        cards: {
          $splice: [[dragIndex, 1], [hoverIndex, 0, cards[dragIndex]]],
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
          onAddClick={ this.addNewListItem }
          isEditing={ this.state.isEditing }
        >
          {
            (card, i) => (
              <DragSort
                key={ card.id }
                index={ i }
                id={ card.id }
                moveListItem={ this.moveListItem }
                isDragEnabled={ this.state.isEditing }
              >
                <Item
                  onRemove={ this.state.isEditing && (() => this.removeListItem(card.id)) }
                  text={ card.text }
                  isEditing={ card.isEditing }
                  onUpdate={ (newValue) => this.updateItem(i, newValue) }
                />
              </DragSort>
            )
          }
        </List>
        <div style={ {marginTop: 25} }>
          <Button
            onClick={ () => this.setState(state => ({ isEditing: !state.isEditing })) }
          >
            { this.state.isEditing ? 'Done' : 'Edit' }
          </Button>
        </div>
      </div>
    );
  }
}

ListsPage.displayName = 'ListPage';

export default DragDropContext(HTML5Backend)(ListsPage); // eslint-disable-line new-cap
