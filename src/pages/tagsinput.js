import React, { Component } from 'react';
import TagsInput from '../components/tagsinput';
import AutoSuggestTagsInput from '../components/autosuggest-tagsinput';
import Card from '../components/card';

const suggestions = [
  {
    photoSrc: 'http://placehold.it/30x30',
    name: 'Intel',
    username: '@intelhungary'
  },
  {
    photoSrc: 'http://placehold.it/30x30',
    name: 'Intellyo',
    username: '@intellyo'
  },
  {
    photoSrc: 'http://placehold.it/30x30',
    name: 'BMW',
    username: '@bmwhungary'
  },
  {
    photoSrc: 'http://placehold.it/30x30',
    name: 'Renault Magyarorszag',
    username: '@renaultmagyarorszag'
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
