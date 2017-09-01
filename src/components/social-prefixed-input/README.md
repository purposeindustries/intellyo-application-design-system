# Social Prefixed Input

The `Social Prefixed Input` component is used to prefix inputs in connection with different social-media sites and applying their styles to the prefix. E.g.: facebook, twitter, pinterest.

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
