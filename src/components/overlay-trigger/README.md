# Overlay Trigger

`Overlay Triggers` are used to aid the proper functionality of [`Popovers`](../popover/README) and [`Tooltips`](../tooltip/README). You can pass `components` into the `overlay` property to invoke them.

## Props

| Prop | Type | Description |
| ---- | ---- | ----------- |
| children | node | The components to apply the overlay on |
| overlay | node | Supply the preferred component to appear as a Popover |
| trigger | oneOf(['hover', 'click']) | The user event on which the action is invoked |
| delay | number | You can choose to apply a delay on the Popover. The default is 800ms. |
| className | string | Use to specify any additional classes to the component. |
| onOpen | func | invoked when the overlay opens. |
| onClose | func | invoked when the overlay closes. |

## Examples

Use to give rise to your `Popover` passed as `prop` to `overlay`.

```jsx
<OverlayTrigger
  overlay={
    <Popover>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    </Popover> }
>
  Hover me!
</OverlayTrigger>
```
