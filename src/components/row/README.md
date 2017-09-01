# Row

The `Row` component is used to horizontally separate the elements.

## Props

| Prop | Type | Description |
| ---- | ---- | ----------- |
| children | node | Use to render out elements passed into the component. |

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