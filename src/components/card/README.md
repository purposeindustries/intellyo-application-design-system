# Card

Cards are used to group similar concepts and tasks together to make your content
easier for users to scan, read, and get things done.

## Props

| Prop | Type | Description |
| ---- | ---- | ----------- |
| title | node | Title content for the card |
| titleCaption | node | Caption which appears under the title |
| children | node | Inner content of the card |
| icon | node | Use to display an arbitrary icon next to the title |
| footer | node | A footer for the card |
| className | string | Set the label of the button |

## Examples

Use when you have a `simple` message to communicate.

```jsx
<Card title="Title goes here">
  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi blandit orci vitae sem vestibulum sagittis.
</Card>
```

Use when you have to emphasize the `importance` of your message and want to have a further explanation.

```jsx
<Card
  title="Title goes here"
  titleCaption="And you can add caption too"
  icon={ (
    <Icon icon="ion-information-circled" />
  ) }
>
  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi blandit orci vitae sem vestibulum sagittis.
</Card>
```

Use when you have to link in `information`. It can be a React Component as well, not just a string. Check out the example below.

```jsx
<Card
  title="Title goes here"
  titleCaption="And you can add caption too"
  footer={ (
    <Button size="small">
      Okay
    </Button>
    <Button danger size="small">
      Hello!
    </Button>
  ) }
>
  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
</Card>
```
