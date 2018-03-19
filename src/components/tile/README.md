# Tile

`Tile component` can contain image, icon or solid color with 3 different size and 3 different shape.

## Props

| Prop | Type | Description |
| ---- | ---- | ----------- |
| image | string | The url of the image |
| icon | node | You can pass an icon as node here |
| color | string | Color of solid brackground in hex or with color name. This background is visible under transparent png or icon.
| size | string: `small`, `medium`, `large` | Size of the tile |
| shape | string: `circle`, `rounded`, `square` | Shape of the tile |
| style | object | Object of css properties and values in camel case format for custom styling |
| className | string | Custom className for tile wrapper div |

## Examples

```
<Tile
    size="small"
    color="green"
/>

<Tile
    icon={ <Icon icon="ion-android-alarm-clock" color="red" /> }
    color="#CCC"
/>

<Tile
    size="large"
    image="/assets/image.jpg"
/>

<Tile
    size="large"
    color="#CCC"
    shape="circle"
/>

<Tile
    size="large"
    color="#CCC"
    shape="square"
/>
```
