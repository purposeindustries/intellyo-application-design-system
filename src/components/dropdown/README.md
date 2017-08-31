# Dropdown

A `Dropdown` component is used to define a list from where a user can choose a variety of provided options from.

## Props

| Prop | Type | Description |
| ---- | ---- | ----------- |
| isActive | bool | Use to set whether the component is in its `active` state or not. |
| label | string | Use to set up a label for the component. |
| children | oneOfType([element, arrayOf(element)]) | Items to render out as an available option. |
| className | string | Use to specify any additional classes to the component. |
| style | object | Use to define unique styles for the Dropdown. |

## Example

```
<Dropdown
  label="Foobar"
  isActive={ false }
>
  <DropdownItem>
    Hello
  </DropdownItem>
  <DropdownItem default>
    yeah
  </DropdownItem>
  <DropdownItem>
    hi
  </DropdownItem>
</Dropdown>
```
