# Social Prefixed Input

With Limit is responsible for setting the maximum character limit on an arbitrary component. E.g.: [Text Area](/src/components/textarea)

## Props

| Prop | Type | Description |
| ---- | ---- | ----------- |
| className | string | Use to specify custom classnames to your component. |
| children | oneOfType([element, arrayOf(element)]) | Children to render out inside the component. |

## Examples

```jsx
<SocialPrefixedInput
  onSelectChange={ (prefixChildrenValue) => {
    this.setState({
      prefixValue: prefixChildrenValue
    }, () => this.handleSocialPrefixedInput());
  } }
  onInputChange={ (e) => {
    this.setState({
      prefixInputValue: e.target.value
    }, () => this.handleSocialPrefixedInput());
  } }
>
  <PrefixedItem
    value="facebook"
  >
    https://facebook.com/
  </PrefixedItem>
  <PrefixedItem
    value="twitter"
  >
    https://twitter.com/
  </PrefixedItem>
  <PrefixedItem
    value="instagram"
  >
    https://instagram.com/
  </PrefixedItem>
  <PrefixedItem
    value="pinterest"
  >
    https://pinterest.com/
  </PrefixedItem>
</SocialPrefixedInput>
```
