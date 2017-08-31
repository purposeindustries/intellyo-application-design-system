# Input

`Loading Buttons` are used to represent the current state of a process.

## Props

| Prop | Type | Description |
| ---- | ---- | ----------- |
| onClick | func | Callback function which returns a `Promise`. |

## Examples

Use to give rise to your `Popover` passed as `prop` to `overlay`.

```jsx
<LoadingButton
  onClick={ () => new root.Promise((resolve) => {
    setTimeout(resolve, 3000);
  }) }
/>
```
