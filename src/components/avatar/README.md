# Avatar

Avatars are used to show a thumbnail representation of an individual or
business in the interface.

## Props

| Prop | Type | Description |
| ---- | ---- | ----------- |
| size | string | Size of the avatar |
| style | object | Set the style of the avatar |
| name | string | The name of the person the avatar displays |
| caption | string | Short description next to the avatar |
| icon | node | Icon to appear before the caption |
| src | string | URL of the avatar image |

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

Use to display an `icon` below the `name` prop, next to the `caption`.

```jsx
<Avatar
  name="Donald Trump"
  src="http://az616578.vo.msecnd.net/files/2016/11/10/6361441079692610831635571641_nast.jpg"
  size="medium"
  icon={ (<Icon icon="ion-ios-location" />) }
/>
```
