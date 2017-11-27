# Overlay Trigger

`Overlay Triggers` are used to aid the proper functionality of [`Popovers`](../popover/README) and [`Tooltips`](../tooltip/README). You can pass `components` into the `overlay` property to invoke them.

## Props

| Prop | Type | Description |
| ---- | ---- | ----------- |
| children | node | The components to apply the overlay on |
| overlay | node | Supply the preferred component to appear as a Popover |
| trigger | oneOf(['hover', 'click']) | The user event on which the action is invoked |
| delay | number | You can choose to apply a delay on the Popover. The default is 800ms. |

## Examples

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

# Auto Positioner

Sometimes `<Popover />`s and `<Tooltip />`s slip out of the view. That's when `<AutoPositioner />` comes to the rescue. `<AutoPositioner />` wrapper is used for automatically align a popover or a tooltip on the viewport.

## Props

| Prop | Type | Description | Default value |
| ---- | ---- | ----------- | ------------- |
| children | `node` | The components to be wrapped by `<AutoPositioner />`. These children needs to be either a `<Tooltip />` or a `<Popover />`. | `none` |
| behaviour | `oneOf(['flip', 'push'])` | With the `behaviour` prop you can define how `<AutoPositioner />` should align its child. You should use the `push` behaviour only when you wrap a `<Popover />` with this component and its placement is either `'top'` or `'bottom'`. `<Tooltip />`s shouldn't react to auto positioner's push behaviour. | `'flip'` |

## Examples

Using `<AutoPositioner />` with flip behaviour.

```jsx
<OverlayTrigger
  placement="top"
  overlay={
    <AutoPositioner>
      <Popover placement="right">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </Popover>
    </AutoPositioner>
  }
>
  Hover me!
</OverlayTrigger>
```

Using `<AutoPositioner />` with push behaviour.

```jsx
<OverlayTrigger
  placement="top"
  overlay={
    <AutoPositioner behaviour="push">
      <Popover placement="bottom">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </Popover>
    </AutoPositioner>
  }
>
  Hover me!
</OverlayTrigger>
```
