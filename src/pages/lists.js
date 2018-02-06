import React from 'react';
import update from 'immutability-helper';
import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';
import PropTypes from 'prop-types';
import List from '../components/list/';
import DragSort from '../components/list/dragSort';
import Button from '../components/button/';
import Icon from '../components/icon/';
import Input from '../components/input/';

class Item extends React.Component {
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

Item.displayName = 'Item';

Item.propTypes = {
  text: PropTypes.node,
  onRemove: PropTypes.oneOfType([PropTypes.func, PropTypes.bool]),
  isEditing: PropTypes.bool,
  onUpdate: PropTypes.func,
};

Item.defaultProps = {
  onRemove: null,
  isEditing: false,
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

  // immutability helper examples and more about usage here:
  // https://reactjs.org/docs/update.html
  // https://github.com/kolodny/immutability-helper
  // https://stackoverflow.com/questions/29537299/react-how-do-i-update-state-item1-on-setstate-with-jsfiddle
  // https://github.com/react-dnd/react-dnd/blob/master/examples/04%20Sortable/Simple/Container.js


  addNewListItem = () => {
    const id = +new Date();
    this.setState({
      cards: update(this.state.cards, {$push: [{ id, text: '' }]})
    }, () => this.editItem(this.state.cards.length - 1));
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
