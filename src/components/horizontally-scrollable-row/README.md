# HorizontallyScrollableRow

We have a separate component for horizontal scrolling. You ought to use `<HorizontallyScrollableRow />`, when you wouldn't like to have your content overflown, but have it scrolled within a component.

## Props

| Prop | Type | Description |
| ---- | ---- | ----------- |
| children | node | The content to be displayed inside your `<HorizontallyScrollableRow />`. |

## Example

```
<HorizontallyScrollableRow>
  <ChartTraceSummaryItem
    color="#FFB946"
    title="Intel"
    value="273"
    data={ 0.23 }
    date="30th Apr"
  />
  <ChartTraceSummaryItem
    color="#00BEA9"
    title="Intellyo"
    value="1.7k"
  />
  <ChartTraceSummaryItem
    title="Italiano"
    value="666"
    data={ -0.5 }
    date="30th Apr"
  />
</HorizontallyScrollableRow>
```
