# Tags input

A `Tags input` component let's you create induvidually labeled tags.

## Props

| Prop | Type | Description |
| ---- | ---- | ----------- |
| className | string | Use to specify a unique class to your component. |
| value | array | Use to change the residing value inside your tag / tags. |
| onChange | func | Callback function which fires on every time there is a change taking place. |
| isInputActive | bool | Used to perceive wheter the input is in an active state or not. |
| inputProps | object | You can specify individual inputs. |
| detailed | bool | Lets you create more verbose explanation for your tags. |
| suggestions | arrayOf(oneOfType([string, shape({ image: string, title: string, caption: string })])) | Used to specify the desired suggestions. |
| onSuggestionSelected | func | Callback function which fires when there is a suggestion selected. |
| colors | arrayOf(string) | Use to specify unique colors to the component. |
| addKeys | arrayOf(number) | Use to add unique keys to your component. |


## Examples

```
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
```
