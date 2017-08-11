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
              transformSuggestion={ (suggestion) => suggestion }
              suggestions={ suggestions }
              inputProps={ {
                placeholder: 'Search here for tags...'
              } }
              renderTag={ (tag) => (
                <div className="autosuggest-tagsinput-tag-wrapper">
                  {
                    tag.photoSrc && (
                      <img
                        src={ tag.photoSrc }
                        alt={ tag.name }
                        className="autosuggest-tagsinput-tag-image"
                      />
                    )
                  }
                  <div className="autosuggest-tagsinput-tag-details">
                    <span className="autosuggest-tagsinput-tag-name">{ tag.name }</span>
                    <span className="autosuggest-tagsinput-tag-username">{ tag.username }</span>
                  </div>
                </div>
              ) }
            />
            <AutoSuggestTagsInput
              allowCustomValues
              transformSuggestion={ (suggestion) => {
                if (typeof suggestion === 'string') {
                  return suggestion;
                }
                return suggestion.name;
              } }
              onlyUnique
              compare={ (a, b) => a.name !== b }
              suggestions={ suggestions }
              inputProps={ {
                placeholder: 'Search here for tags...'
              } }
              renderTag={ (tag) => (
                <div className="autosuggest-tagsinput-tag-details">
                  <span className="autosuggest-tagsinput-tag-name">{ tag }</span>
                </div>
              ) }
            />
            <AutoSuggestTagsInput
              allowCustomValues
              transformSuggestion={ (suggestion) => {
                if (typeof suggestion === 'string') {
                  return suggestion;
                }
                return suggestion.name;
              } }
              suggestions={ suggestions }
              inputProps={ {
                placeholder: 'Search here for tags...'
              } }
              renderTag={ (tag) => (
                <div className="autosuggest-tagsinput-tag-details">
                  <span className="autosuggest-tagsinput-tag-name">{ tag }</span>
                </div>
              ) }
            />
          </div>
        </Card>
      </div>
    );
  }
}
