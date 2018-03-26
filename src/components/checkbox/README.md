# Checkbox

Checkbox allows you to select single values for submission in a form (or not).

## Props

| Prop | Type | Description | Default value |
| ---- | ---- | ----------- | ------------- |
| checked | boolean | Set the boolean to be `checked` or `unchecked`. | `none` |
| onChange | func | A callback, which is invoked every time you click on it. | `() => {}` |

## Examples

```jsx
<Checkbox
  checked={ this.state.checkbox }
  onChange={ () => this.setState({checkbox: !this.state.checkbox}) }
/>
```
