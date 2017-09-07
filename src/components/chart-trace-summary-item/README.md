# Chart Trace Summary Item

Chart Trace Summary Item is used to show a brief overview about your data.

## Props

| Prop | Type | Description |
| ---- | ---- | ----------- |
| color | string | Set the vertical line's color. Expected values: `'#fff'` || `'rgb(255, 0, 0)'` |
| title | string | Title for the Component |
| value | string | Numerical representation of your progress |
| data | string | Data derived from the value |
| onClick | func | You can set up a callback function |

## Examples

```
<ChartTraceSummaryItem
  color="#00BEA9"
  title="Intellyo"
  value="1.7k"
  data="+ 423% (avg.)"
/>
```
