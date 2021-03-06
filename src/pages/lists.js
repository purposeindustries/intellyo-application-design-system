import React from 'react';
import { DragDropContext as dragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';
import PropTypes from 'prop-types';
import List from '../components/list/';
import DragSort from '../components/list/dragSort';
import Button from '../components/button/';
import Icon from '../components/icon/';
import Input from '../components/input/';

class Item extends React.Component {

  static displayName = 'Item';

  static propTypes = {
    text: PropTypes.node,
    onRemove: PropTypes.func,
    isEditing: PropTypes.bool,
    onUpdate: PropTypes.func,
  };

  static defaultProps = {
    onRemove: null,
    isEditing: false,
  };

  state = {
    textInput: ''
  };

  handleChange = (e) => {
    this.setState({ textInput: e.target.value });
  };

  render() {
    if (this.props.isEditing) {
      return (
        <div className="intellyo-list-item list-item-editing">
          <Input
            defaultValue={ this.props.text }
            onChange={ this.handleChange }
          />
          <Button
            onClick={ () => this.props.onUpdate(this.state.textInput) }
          >
            Save
          </Button>
        </div>
      );
    }

    return (
      <div className="intellyo-list-item">
        { this.props.text }
        { this.props.onRemove &&
          <Icon
            onClick={ this.props.onRemove }
            icon="ion-ios-trash"
          />
        }
      </div>
    );
  }
}

const rearrangeItems = (items, moveFromIndex, moveToIndex) => {
  const movingItem = items[moveFromIndex];
  items.splice(moveFromIndex, 1);
  items.splice(moveToIndex, 0, movingItem);

  return items;
};

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
    }), () => this.updateItem(this.state.cards.length - 1, { isEditing: true }));
  }

  updateItem = (index, propValue) => {
    this.setState({
      cards: [
        ...this.state.cards.slice(0, index),
        {
          ...this.state.cards[index],
          ...propValue
        },
        ...this.state.cards.slice(index + 1)
      ]
    });
  }

  removeListItem = (id) => {
    const cards = this.state.cards.filter(card => card.id !== id);
    this.setState({ cards });
  }

  moveListItem = (moveFromIndex, moveToIndex) => {
    const cardsCopy = [...this.state.cards];
    const cards = rearrangeItems(cardsCopy, moveFromIndex, moveToIndex);
    this.setState({ cards });
  }

  render() {
    const { cards } = this.state;
    return (
      <div>
        <List
          items={ cards }
          onAddClick={ this.addNewListItem }
          isEditing={ this.state.isEditing }
          renderItem={
            (card, i) => (
              <DragSort
                key={ card.id }
                index={ i }
                id={ card.id }
                moveListItem={ this.moveListItem }
                isDragEnabled={ this.state.isEditing }
              >
                <Item
                  onRemove={ () => this.removeListItem(card.id) }
                  text={ card.text }
                  isEditing={ card.isEditing }
                  onUpdate={ (newValue) => this.updateItem(i, {text: newValue, isEditing: false}) }
                />
              </DragSort>
            )
          }
        />
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

export default dragDropContext(HTML5Backend)(ListsPage);
