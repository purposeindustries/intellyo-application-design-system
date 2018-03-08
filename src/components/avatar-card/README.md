# AvatarCard

AvatarCard are used to show a thumbnail representation and additional info of an individual or
business in the interface.

## Props

| Prop | Type | Description | Default value |
| ---- | ---- | ----------- | ------------- |
| name | string | The name of the person the avatar displays | `'John Doe'` |
| icon | node | Icon to appear before the caption | `none` |
| caption | string | Short description next to the avatar | `none` |
| src | string | URL of the avatar image | `none` |

## Examples

Use to display an `icon` below the `name` prop, next to the `caption`.

```jsx
<Avatar
  name="Donald Trump"
  src="http://az616578.vo.msecnd.net/files/2016/11/10/6361441079692610831635571641_nast.jpg"
  size="medium"
  icon={ (<Icon icon="ion-ios-location" />) }
/>
```
