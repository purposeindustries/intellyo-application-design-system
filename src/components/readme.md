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

### Default Tooltip

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
| size | string | Size of the avatar |
| style | object | Set the style of the avatar |
| name | string | The name of the person the avatar displays |
| caption | string | Short description next to the avatar |
| icon | node | Icon to appear before the caption |
| src | string | URL of the avatar image |

## Examples

### Default Avatar

Use to present an avatar for a customer, or business.

```jsx
<Avatar
  name="Donald Trump"
  size="small"
/>
```

Use to display the `image` inside your `src` prop's url.

```
<Avatar
  name="Donald Trump"
  src="http://az616578.vo.msecnd.net/files/2016/11/10/6361441079692610831635571641_nast.jpg"
  size="medium"
/>
```
---

# Card

Cards are used to group similar concepts and tasks together to make Shopify
easier for merchants to scan, read, and get things done.

---

## Props

| Prop | Type | Description |
| ---- | ---- | ----------- |
| title | string | Title content for the card |
| titleCaption | string | Caption which appears under the title |
| children | node | Inner content of the card |
| icon | node | Use to display an arbitrary icon next to the title |
| footer | node | A footer for the card

## Examples

### Default card

Use when you have a simple message to communicate.

```jsx
<Card title="Title goes here">
  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi blandit orci vitae sem vestibulum sagittis.
</Card>
```

Use when you have to emphasize the importance of your message and want to have a further explanation.

```
<Card title="Title goes here" titleCaption="And you can add caption too" icon={ (<Icon icon="ion-information-circled" />) }>
  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi blandit orci vitae sem vestibulum sagittis.
</Card>
```
