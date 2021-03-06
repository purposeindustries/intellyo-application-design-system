# TabPanel

`<TabPanel />` is used to create tabs to switch between pages. It relies on the later introduced `<Tab />` component.

## Props

| Prop | Type | Description | true |
| ---- | ---- | ----------- | ---- |
| children | node | Tabs, which hold their content as children. | `none` |
| isSticky | bool | If you'd like to set the TabPanel's header sticky, set this prop to `true`. | `none` |
| onBeforeChange | function | You can prompt the user before switching between tabs. | `() => true` |
| onChange | function | Take a number as its first parameter. Invoked whenever activeIndex state changes. | `() => {}` |
| activeIndex | number | You can put a number here, which renders you the (n - 1)th <Tab />. | `() => {}` |

## Example

```
<TabPanel>
  <Tab title="Create">
    <Box>...some content</Box>
  </Tab>
  <Tab title="Plan">
    <Box>...some content</Box>
  </Tab>
</TabPanel>
```

# Tab

Tab is used separate each page in a TabPanel.

## Props

| Prop | Type | Description |
| ---- | ---- | ----------- |
| children | node | Content you'd like to display. |
| title | node | The title you'd like to click on. |
| img | node | You can render any node in here. |
| isSticky | bool | If you'd like to set the TabPanel's header sticky, set this prop to `true`. |

## Example

See the example at the `<TabPanel />` component.
