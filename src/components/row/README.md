# Row

The `Row` component is used to horizontally separate the elements.

## Props

| Prop | Type | Description |
| ---- | ---- | ----------- |
| children | node | Use to render out elements passed into the component. |
| gutter | number | You can set a custom value for the left and right paddings of the Row. The default value is `15`. |
| className | string | You can set custom class name for the row div |

## Examples

```jsx
<Row>
  <Col span={ 6 }>
    <div className="avatar-wrapper">
      <Avatar
        name="Donald Trump"
        size="small"
      />
    </div>
  </Col>
</Row>
```
