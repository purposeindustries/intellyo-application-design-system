# Col

Chart Trace Summary Item is used to show a brief overview about your data.

## Props

| Prop | Type | Description |
| ---- | ---- | ----------- |
| span | number | Set the desired number of columns, maximum value: 12 |
| children | node | The content to display within the columns |
| style | object | Pass styles to the component Expected value: `{}` |

## Example

```
<Col span={ 3 }>
  <Button size="large">
    Click me!
  </Button>
</Col>  
```
