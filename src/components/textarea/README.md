# Text Area

Text Areas are used to display text inputs. `Textarea` is implemented with a
regular `textarea` element, `RichTextarea` is a `div` with `contenteditable`,
and can display HTML as well. By default it translates `\n` to `<br />`, and
creates `<a>` tags from every link (urls with `http` and `https` protocols).

## Props

| Prop | Type | Description |
| ---- | ---- | ----------- |
| name | string | Name of the component |
| placeholder | string | Placeholder text to appear when there is no value |
| disabled | bool | Whether the component is disabled or not |
| value | string | Text do display inside |
| defaultValue | string | Default text to display |
| onChange | func | Callback function to run, when there is a change |
| onKeyDown | func | Callback function to run, when a key was pressed inside the textarea |
| transform | func | Only used in `RichTextarea`, it's used to transform plaintext content to HTML |

## Examples

```
<Textarea
  name="bio"
  value={ this.state.bio }
  placeholder="Text goes here"
  onChange={ this.handleInputChange }
/>

<RichTextarea
  name="content"
  value={ this.state.content }
  placeholder="Add your content here"
  onChange={ this.updateContent }
/>
```
