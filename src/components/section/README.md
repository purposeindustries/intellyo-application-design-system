# Section

It's really similar to [Card](../card), but it lacks the white background, box-shadow etc. Sections can be used to group similar concepts and tasks to make your content easier for users to scan, read and understand.

## Props

| Prop | Type | Description | Default value |
| ---- | ---- | ----------- | ------------- |
| title | node | Title content for the section |
| titleCaption | node | Caption which appears under the title |
| children | node | Inner content of the section |
| icon | node | Use to display an arbitrary icon next to the title |
| footer | node | A footer for the section |
| className | string | Set the className of section |


## Examples

```jsx
<Section title="Title goes here">
  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi blandit orci vitae sem vestibulum sagittis.
</Section>
```

```jsx
<Section
  title="Title goes here"
  titleCaption="Caption goes here"
>
  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi blandit orci vitae sem vestibulum sagittis.
</Section>
```
