# Text Area

Subheadings are used for the title of any sub-sections in top-level page
sections. Generally, sections of a card use subheadings for their titles.

## Props

| Prop | Type | Description |
| ---- | ---- | ----------- |
| name | string | Name of the component |
| placeholder | string | Placeholder text to appear when there is no value |
| disabled | bool | Whether the component is disabled or not |
| value | string | Text do display inside |
| defaultValue | string | Default text to display |
| onChange | func | Callback function to run, when there is a change |

## Examples

```
<Textarea
  name="bio"
  value={ this.state.bio }
  placeholder="Text goes here"
  onChange={ this.handleInputChange }
/>
```
