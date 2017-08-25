# Overlay Trigger

`Overlay Triggers` are used to aid the proper functionality of [`Popovers`](../popover/README) and [`Tooltips`](../tooltip/README). You can pass `components` into the `overlay` property to invoke them.

## Props

| Prop | Type | Description |
| ---- | ---- | ----------- |
| children | node | The components to apply the overlay on |
| overlay | node | Supply the preferred component to appear as a Popover |
| placement | string | The preferred direction of the Overlay to appear |
| trigger | oneOf | You can choose between `hover` and `click` |

## Examples

###  Default Overlay Trigger

Use to give rise to your `Popover` passed as `prop` to `overlay`.

```jsx
<OverlayTrigger
  placement="top"
  overlay={
    <Popover>
  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
  </Popover> }
>
  Hover me!
</OverlayTrigger>
```