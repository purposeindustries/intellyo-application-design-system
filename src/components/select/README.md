# Select

Select lets users choose one option from a list in a dropdown menu. It
works well for lists of more than four choices when displaying them could
clutter up the interface.

## Props

| Prop | Type | Description |
| ---- | ---- | ----------- |
| id | string | ID for form input |
| label | string | Label for the checkbox |
| value | string | Value for form input |
| children | oneOfType([element, arrayOf(element)]) | The items will appear on your list |
| onChange | func | Callback when selection is changed |
| isActive | bool | Use to active or disable the component |
| style | obj | Pass styles to the component Expected value: `{}` |

## Examples

```
<Select
  value={ this.state.prefixValue }
  onChange={ (value, id, childrenValue) => {
    this.setState({
      prefixValue: value
    });
    if (this.props.onSelectChange) {
      this.props.onSelectChange(childrenValue);
    }
  } }
>
  { this.props.children }
</Select>
```
