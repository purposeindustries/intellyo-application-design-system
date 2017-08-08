import React, { Component } from 'react';
import TagsInput from '../components/tagsinput';
import Card from '../components/card';

export default class Cards extends Component {

  static displayName = 'Cards'

  render() {
    return (
      <div>
        <Card>
          <TagsInput
            onlyUnique
            inputProps={ {
              placeholder: 'Type your tag...'
            } }
          />
        </Card>
      </div>
    );
  }
}
