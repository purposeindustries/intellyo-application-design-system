# Toggleable Tags

Toggleable tags is like a select, but it displays all the options at once. It improves usability for the users.

## Props

| Prop | Type | Description | isRequired |
| ---- | ---- | ----------- | ---------- |
| tags | `arrayOf({title, value})` | Tags that you'd like to display. You need to provide an array of object with the shape of `title` and `value`. **Note**: `title` and `value` are required keys. | yes |
| onChange | function | Optional callback to fire, when tags are changed. | yes |
| selected | string | This is a string, which is compared with the other tags to know which tag has been selected. | yes |

## Examples

```jsx
const tags = [
  {
    title: 'alma',
    value: 'alma'
  },
  {
    title: 'belma',
    value: 'belma'
  }
]

...

<ToggleableTags
  tags={ tags }
  selected={ this.state.tagsInput6 }
  onChange={ (tag) => this.setState({
    tagsInput6: tag === this.state.tagsInput6 ? '' : tag
  }) }
/>
```
