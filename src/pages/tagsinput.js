import React, { Component } from 'react';
import TagsInput from '../components/tagsinput';
import Card from '../components/card';

export default class TagsInputPage extends Component {

  static displayName = 'TagsInputPage'

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
