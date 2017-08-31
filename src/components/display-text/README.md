# Display text

Display styles make a bold visual statement. Use them to create impact when the
main goal is visual storytelling. For example, use display text to convince or
reassure a merchant such as in marketing content or to capture attention during onboarding.

## Props

| Prop | Type | Description |
| ---- | ---- | ----------- |
| size | string | Set the size of the Component. Default value: 'regular' |
| tagName | string | The content to display within the columns |
| children | node | The content to display |
| className | string | Pass styles to the component Expected value: `{}` |

## Example

```
<DisplayText size="large">
  { props.title }
</DisplayText>
```
