# Multiselect

Multiselect looks like a select, but it supports multiple selection in a dropdown.

## Props

| Prop | Type | Description | isRequired |
| ---- | ---- | ----------- | ---------- |
| id | string | You can specify the id of the Multiselect. | no |
| onChange | function | You have the power to overwrite the onChange method of Multiselect. The onChange methods arguments: `onChange(value, childInnerText)`. | no |
| selected | array | The `selected` prop contains all the selected elements. | no |
| isActive | boolean | As `Multiselect` relies on the `Dropdown` component `isActive` needs to be handled in `Multiselect`'s state to specify, when the dropdown should be open or not. | no |
| children | node | `Multiselect`'s children are preferably `Option` and `OptionSeparator` components. They are going to be rendered in a `Dropdown`. | no |
| defaultLabel | node | You can specify the default label of the `Multiselect` component. It's optional. Default value is 'Nothing is selected.' | no |
| selectedLabel | node | you can modify the text of `selected` to something else for e.g. in language version | no |

## Examples

```jsx
<Multiselect
  id="status"
  onChange={ this.handleMultiselect }
  selected={ this.props.filters.status }
>
  <Option value="published">Published</Option>
  <Option value="unpublished">Unpublished</Option>
  <OptionSeparator>Other</OptionSeparator>
  <Option value="copy-in-progress">Copy in progress</Option>
</Multiselect>
```

See more examples [here](/src/pages/inputs.js).
