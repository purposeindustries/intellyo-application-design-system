# Select

Select lets users choose one option from a list in a dropdown menu. It
works well for lists of more than four choices when displaying them could
clutter up the interface.

## Props

| Prop | Type | Description |
| ---- | ---- | ----------- |
| id | string | ID for form input |
| icon | element | Use it to change the icon |
| value | string | Value for form input |
| children | oneOfType([element, arrayOf(element)]) | The items will appear on your list |
| onChange | func | Callback when selection is changed |
| style | obj | Pass styles to the component Expected value: `{}` |
| label | node | You can write any string which appears above select as a label. |
| className | string | Use to specify any additional classes to the component. |


## Examples

```
<Select
  value={ this.state.value }
  onChange={ (value, id, childrenValue) => {
    this.setState({
      value: value
    });
  } }
>
  { this.props.children }
</Select>
```
