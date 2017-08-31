# With Limit

With Limit is responsible for setting the maximum character limit on an arbitrary component. E.g.: [Text Area](/src/components/textarea)

## Props

| Prop | Type | Description |
| ---- | ---- | ----------- |
| limit | number | The children to display within the tooltip |
| value | string | The input the user enters |
| onChange | func | Callback function to run when changes take place |


## Examples

### Default Tooltip

Use when necessary to provide an explanation for an interface element. Default placement is top if `placement` is omitted. Place your `content` inside the component to display within.

```jsx
<Tooltip placement="right">
International University of Monaco
</Tooltip>
```
