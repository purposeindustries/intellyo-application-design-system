# OptionSeparator

OptionSeparators are used with the Multiselect and Option components. They provide you with a separation between Options.

## Props

| Prop | Type | Description |
| ---- | ---- | ----------- |
| children | node | Custom text (node), which is displayed to the user, functions as a separator between set of groups of Options. |


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
