# Toggleable Tags

Toggleable tags is like a select, but it displays all the options at once. It improves usability for the users.

## Props

| Prop | Type | Description |
| ---- | ---- | ----------- |
| tags | `arrayOf({title, value})` | Tags that you'd like to display. You need to provide an array of object with the shape of `title` and `value`. **Note**: `title` and `value` are required keys. |
| onChange | function | Optional callback to fire, when tags are changed. |

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
  onChange={ (tag) => this.setState({
    tagsInput5: tag
  }) }
/>
```
