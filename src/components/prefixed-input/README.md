# Prefixed Input

A `Prefixed Input` component is used to prefix inputs with an arbitrary value.

## Props

| Prop | Type | Description |
| ---- | ---- | ----------- |
| children | element | Use to render out elements passed into the component. |
| suggestions | array | The desired suggestions to display. |
| onFetchRequested | func | Callback function which fires off when there is any fetch request is taking place. |
| onClearRequested | func | Callback function which fires off when there is any clear request is taking place. |
| renderSuggestion | func | Callback function which fires off when there is any suggestion rendering is taking place. |
| getSuggestionValue | func | Callback function used to show the suggestions. |
| onChange | func | Callback function to fire when there is a change. |
| onSelectChange | func | Callback function to fire when there is a change on select. |
| onInputChange | func | Callback function to fire when there is a change on input. |
| prefixValue | string | Use to set the desired prefix value |
| color | string | The content to display inside the popover |
| className | string | Use to set custom classes for your component. |
| value | string | Use to set the value of the input |

## Examples

```jsx
<PrefixedInput
  { ...props }
  className={ classNames(props.className, 'social-prefixed-input') }
>
  { props.children }
</PrefixedInput>
```
