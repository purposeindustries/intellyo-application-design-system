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

# Controlled Toggleable Tags

Controlled Toggleable Tags is the same component as Toggleable Tags. As the name suggests the only difference between them is that, that Controlled Toggleable Tags is a stateless function, and is controlled by one of its wrapper components.

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

<ControlledToggleableTags
  tags={ tags }
  selected={ this.state.tagsInput6 }
  onChange={ (tag) => this.setState({
    tagsInput6: tag === this.state.tagsInput6 ? '' : tag
  }) }
/>
```
