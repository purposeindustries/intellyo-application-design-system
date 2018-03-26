# Dropdown Item

`Dropdown Items` are components.

## Props

| Prop | Type | Description |
| ---- | ---- | ----------- |
| children | node | Use to render out text inside the component. |
| onClick | func | Callback function which fires when there is a click. |
| onMouseDown | func | Callback function which fires on a mouse-down event. |
| default | bool | Use to set the component to its default state. |
| id | string | Use to specify a unique identifier to the component. |
| disabled | bool | in case you want to have an "unselectable" option

## Examples

```jsx
<DropdownItem default>
  yeah
</DropdownItem>
```
