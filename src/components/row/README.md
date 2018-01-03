# Row

The `Row` component is used to horizontally separate the elements.

## Props

| Prop | Type | Description | Default value |
| ---- | ---- | ----------- | ------------- |
| children | node | Use to render out elements passed into the component. | `none` |
| gutter | number | You can set the gutter of each row. | `15` |
| style | object | You can set the styles of each row. You need to set the CSS rules with camalCased syntax. | `{}` |

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
