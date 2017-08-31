# Input

`Input fields` are components where the user can enter data.

## Props

| Prop | Type | Description |
| ---- | ---- | ----------- |
| name | string | Use to set the name of the component. |
| disabled | bool | Use to disable the status of the component. |
| className | string | Use to specify arbitrary classnames to the component. |
| defaultValue | string | You can set a default value for the input. |
| icon | node | Use to set up an icon for the component. |
| onKeyDown | func | A callback function which fires when a key is pressed-down. |
| onBlur | func | A callback function which fires when there there is a blur taking place. |
| onPaste | func | A callback function which fires when there is a paste. |
| onChange | func | A callback function which fires every time there is a change present. |
| error | shape({ message: string }) | Use to set-up an error message. |
| id | string | Use to give an `id` to the component. |
| label | string | Use to specify a label for the component. |
| type | string | Use to specify the type of the input. |
| required | bool | Use to make the the component mandatory to fill in. |
| inputRef | func | Use to set-up an input reference. |
| placeholder | string | Use to display a placeholder text inside the component. |
| suggestions | arrayOf(oneOfType([string, shape({ image: string, title: string })])) | Use to pre-set the desired suggestions. |

## Examples

```jsx
<Input
  placeholder="example@gmail.com"
  label="Email:"
  id="email"
  type="email"
  required
/>
```
