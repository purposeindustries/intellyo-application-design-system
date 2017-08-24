# Tooltip

Tooltips are floating labels that briefly explain the function of a user interface element. They can be triggered when merchants hover, focus, tap, or click.

## Props

| Prop | Type | Description |
| ---- | ---- | ----------- |
| children | string | The children to display within the tooltip |
| placement | string | Set the placement of the arrow pointing |
| className | string | Module aiding multiple class activation |

## Examples

### Default tooltip

Use when necessary to provide an explanation for an interface element. Default placement is top if `placement` is omitted. Place your `content` inside the component to display within.

```jsx
<Tooltip placement="right">
International University of Monaco
</Tooltip>
```
