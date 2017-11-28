import React, { Component } from 'react';
import TagsInput, { StandAloneInput, DefaultInput, ResponsiveTagsInput } from '../components/tagsinput';
import Card from '../components/card/';
import { SuggestionWithImage } from '../components/input/';
import breakpoints from '../utils/breakpoints';
import ToggleableTags from '../components/toggleable-tags';

const tags = [
  {
    title: 'blog.intellyo.com',
    value: 'thisisablablablacode'
  },
  {
    title: 'noble.life',
    value: 'thisiscode'
  },
];

export default class TagsInputPage extends Component {

  static displayName = 'TagsInputPage'

  state = {
    tagsInput2: [],
    tagsInput3: [],
    tagsInput4: []
  }

  render() {
    return (
      <div className="tagsinputs-page">
        <Card
          title="TagsInput"
          titleCaption="Several forms of tags inputs (a.k.a tag bars)"
        >
          <TagsInput
            value={ this.state.tagsInput1 }
            onChange={ (tags) => this.setState({
              tagsInput1: tags
            }) }
            onlyUnique={ true }
            renderInput={ (props) =>
              <DefaultInput
                { ...props }
                placeholder="hey ya"
              />
            }
          />
          <TagsInput
            value={ this.state.tagsInput2 }
            onChange={ (tags) => this.setState({
              tagsInput2: tags
            }) }
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
            renderInput={ (props) => (
              <DefaultInput
                { ...props }
                suggestions={ [{
                  id: 0,
                  image: 'https://yt3.ggpht.com/-kjvQ93RHls8/AAAAAAAAAAI/AAAAAAAAAAA/R-e1VQdsqVs/s48-c-k-no-mo-rj-c0xffffff/photo.jpg',
                  title: 'Volvo',
                  caption: '@intellyo',
                }, {
                  id: 1,
                  image: 'https://yt3.ggpht.com/-kjvQ93RHls8/AAAAAAAAAAI/AAAAAAAAAAA/R-e1VQdsqVs/s48-c-k-no-mo-rj-c0xffffff/photo.jpg',
                  title: 'Volvo sooo Loong!',
                  caption: '@intellyo',
                }].filter((suggestion) => {
                  return !this.state.tagsInput2.find((tag) => tag.id === suggestion.id);
                }) }
                getSuggestionValue={ (suggestion) => {
                  return suggestion;
                } }
                renderSuggestion={ SuggestionWithImage }
                onSuggestionSelected={ (e, { suggestion, addTag }) => {
                  addTag(suggestion);
                } }
                placeholder="Type your tag..."
              />
            ) }
          />
          <TagsInput
            value={ this.state.tagsInput3 }
            onChange={ (tags) => this.setState({
              tagsInput3: tags
            }) }
            size="small"
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
            renderInput={ (props) => (
              <StandAloneInput
                { ...props }
                suggestions={ [{
                  id: 0,
                  image: 'https://yt3.ggpht.com/-kjvQ93RHls8/AAAAAAAAAAI/AAAAAAAAAAA/R-e1VQdsqVs/s48-c-k-no-mo-rj-c0xffffff/photo.jpg',
                  title: 'Volvo',
                  caption: '@intellyo',
                }, {
                  id: 1,
                  image: 'https://yt3.ggpht.com/-kjvQ93RHls8/AAAAAAAAAAI/AAAAAAAAAAA/R-e1VQdsqVs/s48-c-k-no-mo-rj-c0xffffff/photo.jpg',
                  title: 'Volvo sooo Loong!',
                  caption: '@intellyo',
                }].filter((suggestion) => {
                  return !this.state.tagsInput3.find((tag) => tag.id === suggestion.id);
                }) }
                getSuggestionValue={ (suggestion) => {
                  return suggestion;
                } }
                renderSuggestion={ SuggestionWithImage }
                onSuggestionSelected={ (e, { suggestion, addTag }) => {
                  addTag(suggestion);
                } }
                placeholder="Type your tag..."
              />
            ) }
          />
          <ResponsiveTagsInput
            value={ this.state.tagsInput4 }
            onChange={ (tags) => this.setState({
              tagsInput4: tags
            }) }
            breakpoints={ breakpoints }
            size="small"
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
            renderStandAloneInput={ (props) => (
              <StandAloneInput
                { ...props }
                suggestions={ [{
                  id: 0,
                  image: 'https://yt3.ggpht.com/-kjvQ93RHls8/AAAAAAAAAAI/AAAAAAAAAAA/R-e1VQdsqVs/s48-c-k-no-mo-rj-c0xffffff/photo.jpg',
                  title: 'Volvo',
                  caption: '@intellyo',
                }, {
                  id: 1,
                  image: 'https://yt3.ggpht.com/-kjvQ93RHls8/AAAAAAAAAAI/AAAAAAAAAAA/R-e1VQdsqVs/s48-c-k-no-mo-rj-c0xffffff/photo.jpg',
                  title: 'Volvo sooo Loong!',
                  caption: '@intellyo',
                }].filter((suggestion) => {
                  return !this.state.tagsInput4.find((tag) => tag.id === suggestion.id);
                }) }
                getSuggestionValue={ (suggestion) => {
                  return suggestion;
                } }
                renderSuggestion={ SuggestionWithImage }
                onSuggestionSelected={ (e, { suggestion, addTag }) => {
                  addTag(suggestion);
                } }
                placeholder="Type your tag..."
              />
            ) }
            renderDefaultInput={ (props) => (
              <DefaultInput
                { ...props }
                suggestions={ [{
                  id: 0,
                  image: 'https://yt3.ggpht.com/-kjvQ93RHls8/AAAAAAAAAAI/AAAAAAAAAAA/R-e1VQdsqVs/s48-c-k-no-mo-rj-c0xffffff/photo.jpg',
                  title: 'Volvo',
                  caption: '@intellyo',
                }, {
                  id: 1,
                  image: 'https://yt3.ggpht.com/-kjvQ93RHls8/AAAAAAAAAAI/AAAAAAAAAAA/R-e1VQdsqVs/s48-c-k-no-mo-rj-c0xffffff/photo.jpg',
                  title: 'Volvo sooo Loong!',
                  caption: '@intellyo',
                }].filter((suggestion) => {
                  return !this.state.tagsInput4.find((tag) => tag.id === suggestion.id);
                }) }
                getSuggestionValue={ (suggestion) => {
                  return suggestion;
                } }
                renderSuggestion={ SuggestionWithImage }
                onSuggestionSelected={ (e, { suggestion, addTag }) => {
                  addTag(suggestion);
                } }
                placeholder="Type your tag..."
              />
            ) }
          />
        </Card>
        <Card
          title="SuggestionWithImage"
          titleCaption="An item of the list you get as a suggestion when you type something we know about"
        >
          <SuggestionWithImage
            image="https://yt3.ggpht.com/-kjvQ93RHls8/AAAAAAAAAAI/AAAAAAAAAAA/R-e1VQdsqVs/s48-c-k-no-mo-rj-c0xffffff/photo.jpg"
            title="Volvo sooo Loong!"
            caption="@intellyo"
          />
        </Card>
        <Card
          title="Toggleable Tags"
        >
          <ToggleableTags
            tags={ tags }
          />
        </Card>
      </div>
    );
  }
}
