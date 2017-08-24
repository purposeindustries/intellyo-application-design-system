# Tooltip

Tooltips are floating labels that briefly explain the function of a user interface element. They can be triggered when merchants hover, focus, tap, or click.

---

## Props

| Prop | Type | Description |
| ---- | ---- | ----------- |
| children | string | The children to display within the tooltip |
| placement | string | Set the placement of the arrow pointing at |
| className | string | Module aiding multiple class activation |

## Examples

### Default tooltip

Use when necessary to provide an explanation for an interface element. Default placement is top if `placement` is omitted. Place your `content` inside the component to display within.

```jsx
<Tooltip placement="right">
International University of Monaco
</Tooltip>
```

---

# Button

Buttons make common actions immediately visible and easy to perform with one
click or tap. They can be used for any type of action, including navigation.

---

## Props

| Prop | Type | Description |
| ---- | ---- | ----------- |
| danger | boolean | Set the background color to red |
| neutral | boolean | Set the background color to white |
| disabled | boolean | Set the button status to disabled |
| size | oneOf | You can adjust the size of the button |
| children | node | Module aiding multiple class activation |
| icon | node | Set the icon, displayed within the button |
| onClick | function | Invokes the default click action |
| className | string | Module aiding multiple class activation |

## Examples

### Default button

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

```
<Button
  neutral
  size="small"
  icon={ (
    <Icon icon="ion-happy" />
  ) }
/>
```

---

# Avatar

Avatars are used to show a thumbnail representation of an individual or
business in the interface.

---

## Props

| Prop | Type | Description |
| ---- | ---- | ----------- |
| size | string | Set the background color to red |
| style | object | Set the background color to white |
| name | string | Set the button status to disabled |
| caption | string | You can adjust the size of the button |
| icon | node | You can adjust the size of the button |
| src | string | You can adjust the size of the button |
