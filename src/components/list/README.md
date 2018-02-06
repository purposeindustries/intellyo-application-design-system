# List

`List` can be used for generic listing purposes.
`DragSort` can be used to make the list sortable by drag-and-dropping. Without using DragSort node the list is unsortable but elements can be added, deleted and edited.

## List Props

| Prop | Type | Description |
| ---- | ---- | ----------- |
items | arrayOf(any) | Array of objects (in parent's state) which represents the list items' data |
onAddClick | func | Function of adding new list item. Normally pushes item into the above state array |
newItemDescription | node | The text of `add new item` or `add new role` etc depending on what we wanna add |
children | func | The render function which iterates through the items | 
isEditing | bool | Sets the item to editing state |

## DragSort Props

| Prop | Type | Description |
| ---- | ---- | ----------- |
| index | number | The array index of the item which represents the current position in the (state) array |
| id | any | Id of the array item which identifies the item |
| moveListItem | func | A state manipulation function in the parent component which handles the change of sequence |
| children | node | The list item | 
| isDragEnabled | bool | Can be enable/disable the dragging (e.g. editing mode on/off) |


## Examples

```jsx
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
      ],
      isEditing: false,
    };
  }

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

export default DragDropContext(HTML5Backend)(ListsPage);
```
