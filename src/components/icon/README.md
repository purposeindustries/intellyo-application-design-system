# Icon

The `Icon` component is our wrapper component for `react-ionicons`.

## Props

| Prop | Type | Description |
| ---- | ---- | ----------- |
| onClick | func | You have the ability to set a callback for the Icon's click event. |
| icon | string | You can find the appropriate strings for each icon under [our icon page](https://ux.intellyo.com/icons). |

All off the props from [`react-ionicons`'s GitHub page](https://github.com/zamarrowski/react-ionicons#api) can be applied.

## Examples

```jsx
<Icon icon="ion-ios-clock" />

/* or */

<Icon icon="ion-ios-clock" rotate={ true } />
```
