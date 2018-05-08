# Loading Button

`Loading Buttons` are used to represent the current state of a process.

## Props

| Prop | Type | Description | Default value |
| ---- | ---- | ----------- | ------------- |
| onClick | func | Callback function to be called on `click`. | `none` |
| loading | bool | Button loading state, `true` when it is loading. | `none` |
| children | node | You can customise what the Button label should be in **non-loading** state. | `'Save'` |
| loadingText | node | You can customise what the Button label should be in **loading** state. | `'Loading...'` |
| size | oneOf(['small', 'normal', 'large']) | Button size |
| disabled | bool | disables the button | false |

## Examples

Use to give rise to your `Popover` passed as `prop` to `overlay`.

```jsx
<LoadingButton
  onClick={ () => new root.Promise((resolve) => {
    setTimeout(resolve, 3000);
  }) }
/>

<LoadingButton
  onClick={ () => new root.Promise((resolve) => {
    setTimeout(resolve, 3000);
  }) }
  loadingText={ <span>Publishing...</span> }
>
  <span>Publish</span>
</LoadingButton>
```
