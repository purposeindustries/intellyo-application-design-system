# Option

Options can be used with the Multiselect component. They provide a string and a checkable input.

## Props

| Prop | Type | Description |
| ---- | ---- | ----------- |
| value | string | It's the value what's going to be used within the Multiselect component. You can set any value there. |
| children | node | Custom text (node), which is displayed to the user. |
| onClick | func | Used by the Multiselect component. |
| checked | boolean | Used by the Multiselect component. |


## Examples

```jsx
<Multiselect
  id="dueDate"
  onChange={ this.handleMultiselectChange }
  selected={ this.state.selected }
>
  <Option value="today">Today</Option>
  <Option value="tomorrow">Tomorrow</Option>
  <Option value="soon">Soon</Option>
  <Option value="not-today">Not today</Option>
  <OptionSeparator>Other</OptionSeparator>
  <Option value="the-day-after-tomorrow">Day after tomorrow</Option>
</Multiselect>
```

See more examples [here](/src/pages/select.js).
