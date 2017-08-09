import React, { Component } from 'react';
import TagsInput from '../components/tagsinput';
import AutoSuggestTagsInput from '../components/autosuggest-tagsinput';
import Card from '../components/card';

const suggestions = [
  {
    photoSrc: 'http://placehold.it/20x20',
    name: 'Foo'
  },
  {
    photoSrc: 'http://placehold.it/20x20',
    name: 'Bar'
  },
  {
    photoSrc: 'http://placehold.it/20x20',
    name: 'Baz'
  }
];

export default class TagsInputPage extends Component {

  static displayName = 'TagsInputPage'

  render() {
    return (
      <div>
        <Card>
          <div className="tagsinputs">
            <TagsInput
              onlyUnique
              inputProps={ {
                placeholder: 'Type your tag...'
              } }
            />
            <AutoSuggestTagsInput
              onlyUnique
              suggestions={ suggestions }
              inputProps={ {
                placeholder: 'Search here for tags...'
              } }
            />
          </div>
        </Card>
      </div>
    );
  }
}
