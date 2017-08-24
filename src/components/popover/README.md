# Popover

Popovers are small overlays that open on demand, usually when the user clicks a button. They let users access supplementary content and actions without cluttering the page.

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
