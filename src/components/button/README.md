# Button

Buttons make common actions immediately visible and easy to perform with one
click or tap. They can be used for any type of action, including navigation.

## Props

| Prop | Type | Description | Default value |
| ---- | ---- | ----------- | ------------- |
| danger | boolean | Set the background color to red | `none` |
| neutral | boolean | Set the background color to white | `none` |
| disabled | boolean | Set the button status to disabled | `none` |
| active | boolean | Set the button status to active | `none` |
| size | oneOf(['small', 'normal', 'large']) | You can adjust the size of the button | `normal` |
| children | node | Module aiding multiple class activation | `none` |
| icon | node | Set the icon, displayed within the button | `none` |
| onClick | function | Invokes the default click action | `noop` |
| className | string | Module aiding multiple class activation | `none` |
| type | string | This prop defines the type of the button. It can be either `submit`, `reset` or `button`. | `none` |

## Examples

### Default Button

Used most in the interface. Only use another style if a button requires more or less visual weight.

```jsx
<Button>
  Click me!
</Button>
```

### Danger - Size: large

Use to highlight the most important actions in any experience. Don’t use more than one `danger` button in a section or screen to avoid overwhelming users.

```jsx
<Button danger size="large">
  Warning!
</Button>
```
### Icon

Placing the Icon `component` inside the `icon` prop will give rise to the Icon inside the `button`.

```jsx
<Button
  neutral
  size="small"
  icon={ (
    <Icon icon="ion-happy" />
  ) }
/>
```
