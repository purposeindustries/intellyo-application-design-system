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
| getSuggestionValue | func | The content to display inside the popover |
| onChange | func | The content to display inside the popover |
| onSelectChange | func | The content to display inside the popover |
| onInputChange | func | The content to display inside the popover |
| prefixValue | string | The content to display inside the popover |
| color | string | The content to display inside the popover |
| className | string | The content to display inside the popover |
| value | string | The content to display inside the popover |

## Examples

###  Default Popover

Use when presenting a set of actions in a disclosable menu.

```jsx
<Popover>
Lorem ipsum dolor sit amet, consectetur adipiscing elit.
</Popover>
```
