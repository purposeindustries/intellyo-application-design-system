import React from 'react';
import List from '../components/list';

export default class ListsPage extends React.Component {
  handleAdd = (newArray) => {
    console.log('newArray', newArray);
  }

  render() {
    return (
      <List
        afterAdd={ this.handleAdd }
      />
    );
  }
}
