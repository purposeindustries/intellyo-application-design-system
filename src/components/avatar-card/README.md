# AvatarCard

AvatarCard are used to show a thumbnail representation and additional info of an individual or
business in the interface.

## Props

| Prop | Type | Description | Default value |
| ---- | ---- | ----------- | ------------- |
| name | string | The name of the person the avatar displays | `'John Doe'` |
| icon | node | Icon to appear before the caption | `none` |
| caption | node | Short description next to the avatar | `none` |
| src | string | URL of the avatar image | `none` |
| className | string | Specify a custom className for the component | `none` |
| renderAvatar | func | You can render your own avatar inside the card | `noop` |

## Examples

Use to display an `icon` below the `name` prop, next to the `caption`.

```jsx
<AvatarCard
  name="Donald Trump"
  src="http://az616578.vo.msecnd.net/files/2016/11/10/6361441079692610831635571641_nast.jpg"
  size="medium"
  icon={ (<Icon icon="ion-ios-location" />) }
/>
```

Sometimes, it happens when you need `AvatarCard` to be more flexible and render your own avatar component within the card. That's why we provide the `renderAvatar` render prop, which can be a function that takes the default props of our implementation and you can override it with anything you want. Or you can render the our original avatar component with extended or changed props.

```jsx
<AvatarCard
  renderAvatar={ (avatarProps) => (
    <MyAvatar { ...props } foo="bar" lorem="ipsum" />
  ) }
/>
```

For example, we use a smart component which can calculate the boundaries of a child component with which we can produce cloudinary compatible transformation urls.

```jsx
<AvatarCard
  renderAvatar={ (avatarProps) => (
    <Cloudinary>
      { ({ transformationUrl }) => (
        <Avatar { ...avatarProps } src={ transformationUrl } />
      ) }
    </Cloudinary>
  ) }
/>
```
