# Card

Cards are used to group similar concepts and tasks together to make your content
easier for users to scan, read, and get things done.

---

## Props

| Prop | Type | Description |
| ---- | ---- | ----------- |
| title | string | Title content for the card |
| titleCaption | string | Caption which appears under the title |
| children | node | Inner content of the card |
| icon | node | Use to display an arbitrary icon next to the title |
| footer | node | A footer for the card |

## Examples

### Default card

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
  icon={ (<Icon icon="ion-information-circled" />) }>
  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi blandit orci vitae sem vestibulum sagittis.
</Card>
```

# Popover

Popovers are small overlays that open on demand, usually when the user clicks a button. They let users access supplementary content and actions without cluttering the page.

---

## Props

| Prop | Type | Description |
| ---- | ---- | ----------- |
| children | node | The content to display inside the popover |
| placement | string | The preferred direction to open the popover |

## Examples

###  Default Popover

Use when presenting a set of actions in a disclosable menu.

```jsx
<Popover
  active
  activator={<Button>More actions</Button>}
>
  <ActionList
    items={[
      {content: 'Import'},
      {content: 'Export'},
    ]}
  />
</Popover>
```
