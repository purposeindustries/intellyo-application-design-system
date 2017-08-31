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
| children | oneOfType([element, arrayOf(element)]) | Pass styles to the component Expected value: `{}` |
| onChange | func | Callback when selection is changed |
| isActive | bool | Pass styles to the component Expected value: `{}` |
| style | obj | Pass styles to the component Expected value: `{}` |

## Example

```
<DisplayText size="large">
  { props.title }
</DisplayText>
```
