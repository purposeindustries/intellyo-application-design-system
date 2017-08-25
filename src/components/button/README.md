# Button

Buttons make common actions immediately visible and easy to perform with one
click or tap. They can be used for any type of action, including navigation.

## Props

| Prop | Type | Description |
| ---- | ---- | ----------- |
| danger | boolean | Set the background color to red |
| neutral | boolean | Set the background color to white |
| disabled | boolean | Set the button status to disabled |
| size | oneOf(['small', 'normal', 'large']) | You can adjust the size of the button |
| children | node | Module aiding multiple class activation |
| icon | node | Set the icon, displayed within the button |
| onClick | function | Invokes the default click action |
| className | string | Module aiding multiple class activation |

## Examples

### Default Button

Used most in the interface. Only use another style if a button requires more or less visual weight. By default `size` is set to normal, and `onClick` returns an `{}`.

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
