# Avatar

Avatars are used to show a thumbnail representation of an individual or
business in the interface.

## Props

| Prop | Type | Description | Default value |
| ---- | ---- | ----------- | -------------
| size | string | Size of the avatar. It can be either `"small"`, `"medium"`, `"extraLarge"`. | `"large"` |
| style | object | Set the style of the avatar | `none` |
| name | string | The name of the person the avatar displays | `'John Doe'` |
| src | string | URL of the avatar image | `none` |
| tooltipPlacement | `oneOf(['left', 'right', 'top', 'bottom'])` | It's an optional prop for placing the tooltip. If nothing is specified, the `<Tooltip />` will appear at the top as `<Tooltip />`'s default placement is `'top'`. | `<Tooltip />`'s `'top'` |
| showTooltip | `boolean` | Whether you'd like to render a tooltip or not. | `true` |
| className | string | Specify a custom className for the component | `none` |

## Examples

Use to present an avatar for a user.

```jsx
<Avatar
  name="Donald Trump"
  size="small"
/>
```

Use to display the `image` inside your `src` prop's url.

```jsx
<Avatar
  name="Donald Trump"
  src="http://az616578.vo.msecnd.net/files/2016/11/10/6361441079692610831635571641_nast.jpg"
  size="medium"
/>
```
