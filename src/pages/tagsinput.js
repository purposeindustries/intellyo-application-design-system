import React, { Component } from 'react';
import TagsInput from '../components/tagsinput';
import Card from '../components/card/';
import { SuggestionWithImage } from '../components/input';

export default class TagsInputPage extends Component {

  static displayName = 'TagsInputPage'

  render() {
    return (
      <div className="tagsinputs-page">
        <Card>
          <TagsInput
            onlyUnique={ true }
          />
          <TagsInput
            onlyUnique={ true }
            addKeys={ [] }
            detailed={ true }
            colors={ [
              '#29bc94',
              '#763eaf',
              '#ff9517'
            ] }
            inputProps={ {
              placeholder: 'Type your tag...'
            } }
            suggestions={ [{
              image: 'https://yt3.ggpht.com/-kjvQ93RHls8/AAAAAAAAAAI/AAAAAAAAAAA/R-e1VQdsqVs/s48-c-k-no-mo-rj-c0xffffff/photo.jpg',
              title: 'Volvo',
              caption: '@intellyo',
            }, {
              image: 'https://yt3.ggpht.com/-kjvQ93RHls8/AAAAAAAAAAI/AAAAAAAAAAA/R-e1VQdsqVs/s48-c-k-no-mo-rj-c0xffffff/photo.jpg',
              title: 'Volvo sooo Loong!',
              caption: '@intellyo',
            }] }
            getSuggestionValue={ (suggestion) => {
              return suggestion;
            } }
            renderSuggestion={ SuggestionWithImage }
            onSuggestionSelected={ (e, { suggestion, addTag }) => {
              addTag(suggestion);
            } }
          />
        </Card>
      </div>
    );
  }
}
